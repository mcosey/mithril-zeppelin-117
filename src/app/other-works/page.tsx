import type { Metadata } from "next";
import Image from "next/image";
import { PoemPreview } from "@/components/PoemPreview";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Other Works | Mithril Zeppelin 117 Publishing",
  description: "The Serpent and Ramblings from Mithril Zeppelin 117 Publishing.",
};

export default function OtherWorksPage() {
  return (
    <main className="other-works-page">
      <SiteHeader activeHref="/other-works" />
      <div className="works-layout">
        <section className="works-parchment" aria-labelledby="other-works-title">
          <header className="works-masthead">
            <h1 id="other-works-title">Other Works</h1>
          </header>

          <article className="works-entry works-entry-published">
            <figure className="works-cover">
              <Image
                src="/images/evermore-volume-4-cover.jpg"
                alt="Cover of Evermore Volume 4"
                width={288}
                height={445}
                sizes="(max-width: 760px) 72vw, 288px"
                priority
              />
            </figure>
            <div className="works-entry-copy">
              <h2>The Serpent</h2>
              <p>
                <cite>Evermore</cite> is an Edgar Allan Poe-inspired literary anthology series published by The Ravens Quoth Press. <cite>Evermore 4</cite> is the fourth edition, featuring gothic poetry and short fiction by international writers. My poem “The Serpent” is published in this volume.
              </p>
              <p>
                “The Serpent” is a poem I worked on for about five years. It was inspired by Edgar Allan Poe’s “The Raven” and written as its thematic reversal.
              </p>
            </div>
          </article>

          <article className="works-entry works-entry-upcoming">
            <figure className="works-cover-placeholder" aria-label="Cover placeholder for Ramblings">
              <span>Cover to come</span>
              <strong>Ramblings</strong>
            </figure>
            <div className="works-entry-copy">
              <p className="works-status">Coming soon</p>
              <h2>Ramblings</h2>
              <p>Additional details to come.</p>
            </div>
          </article>

          <section className="works-poems" aria-labelledby="works-poems-title">
            <header className="works-poems-heading">
              <h2 id="works-poems-title">Poems</h2>
            </header>
            <PoemPreview />
          </section>
        </section>
      </div>
    </main>
  );
}
