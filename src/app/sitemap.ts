import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/fate-of-creation",
    "/the-bard-named-blythe",
    "/other-works",
    "/blog",
    "/contact",
  ];

  return [
    ...pages.map((pathname) => ({
      url: `${siteUrl}${pathname}`,
      changeFrequency: pathname === "/blog" ? "weekly" as const : "monthly" as const,
      priority: pathname === "" ? 1 : 0.7,
    })),
    ...getAllPosts().map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
