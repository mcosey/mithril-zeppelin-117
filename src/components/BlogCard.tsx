/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { PostSummary } from "@/lib/posts";

type BlogCardProps = {
  post: PostSummary;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="blog-card">
      {post.image ? (
        <Link className="blog-card-image" href={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true">
          <img src={post.image} alt={post.imageAlt || ""} />
        </Link>
      ) : null}
      <div className="blog-card-copy">
        <p className="blog-card-meta">
          <span>{post.category}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
        <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
        <p className="blog-card-description">{post.description}</p>
        <div className="blog-card-footer">
          <span>{post.author}</span>
          <Link href={`/blog/${post.slug}`}>Read post</Link>
        </div>
      </div>
    </article>
  );
}
