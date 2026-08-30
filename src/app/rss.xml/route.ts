import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const items = getAllPosts()
    .map((post) => `
      <item>
        <title>${escapeXml(post.title)}</title>
        <link>${siteUrl}/blog/${post.slug}</link>
        <guid>${siteUrl}/blog/${post.slug}</guid>
        <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
        <description>${escapeXml(post.description)}</description>
        <category>${escapeXml(post.category)}</category>
      </item>`)
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Mithril Zeppelin 117 Publishing</title>
        <link>${siteUrl}/blog</link>
        <description>Posts from Mithril Zeppelin 117 Publishing.</description>
        ${items}
      </channel>
    </rss>`;

  return new Response(feed, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
