import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { plannedPages, type PlannedPageSlug } from "@/content/site";

type PlannedPageProps = { params: Promise<{ slug: string }> };

function isPlannedPage(slug: string): slug is PlannedPageSlug {
  return slug in plannedPages;
}

export function generateStaticParams() {
  return Object.keys(plannedPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PlannedPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isPlannedPage(slug)) return {};
  return {
    title: `${plannedPages[slug].title} | Mithril Zeppelin 117 Publishing`,
    description: `${plannedPages[slug].title} is being prepared for Mithril Zeppelin 117 Publishing.`,
  };
}

export default async function PlannedPage({ params }: PlannedPageProps) {
  const { slug } = await params;
  if (!isPlannedPage(slug)) notFound();
  const page = plannedPages[slug];

  return (
    <main className="subpage-shell">
      <SiteHeader activeHref={`/${slug}`} />
      <section className="subpage" aria-labelledby="page-title">
        <p className="subpage-eyebrow">{page.eyebrow}</p>
        <h1 id="page-title">{page.title}</h1>
        <p>This part of the world is still being charted.</p>
      </section>
    </main>
  );
}
