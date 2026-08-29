import type { Metadata } from "next";
import { BlogSearch } from "@/components/BlogSearch";
import { SiteHeader } from "@/components/SiteHeader";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | Mithril Zeppelin 117 Publishing",
  description: "Posts from Mithril Zeppelin 117 Publishing.",
  alternates: { types: { "application/rss+xml": "/rss.xml" } },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="blog-page">
      <SiteHeader activeHref="/blog" />
      <section className="blog-layout" aria-labelledby="blog-title">
        <header className="blog-masthead">
          <div className="blog-title-rule" aria-hidden="true"><span /></div>
          <h1 id="blog-title">Blog</h1>
          <div className="blog-title-rule" aria-hidden="true"><span /></div>
        </header>
        <BlogSearch posts={posts} />
      </section>
    </main>
  );
}
