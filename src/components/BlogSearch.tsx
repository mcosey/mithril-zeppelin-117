"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "@/components/BlogCard";
import type { PostSummary } from "@/lib/posts";

type BlogSearchProps = {
  posts: PostSummary[];
};

export function BlogSearch({ posts }: BlogSearchProps) {
  const [query, setQuery] = useState("");
  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return posts;

    return posts.filter((post) =>
      [post.title, post.description, post.category]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [posts, query]);

  if (posts.length === 0) {
    return <p className="blog-empty">No posts have been published yet.</p>;
  }

  return (
    <div className="blog-search">
      <label className="blog-search-field">
        <span>Search posts</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Title or category"
        />
      </label>
      <p className="blog-result-count" aria-live="polite">
        {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
      </p>
      {filteredPosts.length > 0 ? (
        <div className="blog-grid">
          {filteredPosts.map((post) => <BlogCard post={post} key={post.slug} />)}
        </div>
      ) : (
        <p className="blog-empty">No posts match that search.</p>
      )}
    </div>
  );
}
