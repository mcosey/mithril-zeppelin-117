import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

export type PostSummary = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image?: string;
  imageAlt?: string;
  order: number;
};

export type Post = PostSummary & {
  body: string;
  html: string;
};

const postsDirectory = path.join(process.cwd(), "content", "posts");

function parseFrontMatter(source: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);

  if (!match) {
    return { attributes: {} as Record<string, string>, body: source.trim() };
  }

  const attributes = Object.fromEntries(
    match[1]
      .split(/\r?\n/)
      .map((line) => {
        const separator = line.indexOf(":");
        if (separator === -1) return null;

        const key = line.slice(0, separator).trim();
        const value = line
          .slice(separator + 1)
          .trim()
          .replace(/^(["'])(.*)\1$/, "$2");

        return key ? [key, value] : null;
      })
      .filter((entry): entry is [string, string] => entry !== null),
  );

  return {
    attributes,
    body: source.slice(match[0].length).trim(),
  };
}

function readPost(filename: string): Post {
  const slug = filename.replace(/\.md$/, "");
  const source = fs.readFileSync(path.join(postsDirectory, filename), "utf8");
  const { attributes, body } = parseFrontMatter(source);

  const requiredFields = ["title", "description", "date", "category"] as const;
  const missingFields = requiredFields.filter((field) => !attributes[field]);

  if (missingFields.length > 0) {
    throw new Error(`${filename} is missing: ${missingFields.join(", ")}`);
  }

  return {
    slug,
    title: attributes.title,
    description: attributes.description,
    date: attributes.date,
    category: attributes.category,
    image: attributes.image || undefined,
    imageAlt: attributes.imageAlt || undefined,
    order: Number(attributes.order || 0),
    body,
    html: marked.parse(body) as string,
  };
}

export function getAllPosts(): PostSummary[] {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".md"))
    .map(readPost)
    .sort((a, b) => b.order - a.order || new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      category: post.category,
      image: post.image,
      imageAlt: post.imageAlt,
      order: post.order,
    }));
}

export function getPostBySlug(slug: string): Post | undefined {
  const filename = `${slug}.md`;
  const filepath = path.join(postsDirectory, filename);
  return fs.existsSync(filepath) ? readPost(filename) : undefined;
}

export function getRelatedPosts(post: PostSummary, limit = 3): PostSummary[] {
  return getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => {
      const aMatches = a.category === post.category ? 1 : 0;
      const bMatches = b.category === post.category ? 1 : 0;
      return bMatches - aMatches || b.order - a.order || new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, limit);
}
