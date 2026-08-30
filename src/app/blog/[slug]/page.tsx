/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/BlogCard";
import { SiteHeader } from "@/components/SiteHeader";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Mithril Zeppelin 117 Publishing`,
    description: post.description,
    openGraph: post.image ? { images: [{ url: post.image, alt: post.imageAlt || post.title }] } : undefined,
  };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const relatedPosts = getRelatedPosts(post);
  const usesEmblem = post.image?.includes("mc-emblem-antique-gold");

  return (
    <main className="blog-page">
      <SiteHeader activeHref="/blog" />
      <article className="blog-article">
        <Link className="blog-back-link" href="/blog">Back to Blog</Link>
        <header className="blog-article-header">
          <h1>{post.title}</h1>
          <div className="blog-title-rule" aria-hidden="true"><span /></div>
          <p className="blog-article-byline">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
        </header>
        {post.image ? (
          <div className={`blog-article-image${usesEmblem ? " blog-article-image-emblem" : ""}`}>
            <img src={post.image} alt={post.imageAlt || ""} />
          </div>
        ) : null}
        <div className="blog-article-body" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      {relatedPosts.length > 0 ? (
        <section className="blog-related" aria-labelledby="related-posts-title">
          <h2 id="related-posts-title">Related Posts</h2>
          <div className="blog-grid">
            {relatedPosts.map((relatedPost) => <BlogCard post={relatedPost} key={relatedPost.slug} />)}
          </div>
        </section>
      ) : null}
    </main>
  );
}
