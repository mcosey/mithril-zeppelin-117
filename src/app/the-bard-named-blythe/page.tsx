import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "The Bard Named Blythe | Mithril Zeppelin 117 Publishing",
  description: "The Bard Named Blythe, author of The Tempest Lullaby and The Bumble Bee Bridge.",
};

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="instagram-dot" cx="17.4" cy="6.7" r="1" />
    </svg>
  );
}

export default function BardNamedBlythePage() {
  return (
    <main className="bard-page">
      <SiteHeader activeHref="/the-bard-named-blythe" />
      <div className="bard-layout">
        <section className="bard-parchment" id="overview" aria-labelledby="bard-title">
          <header className="bard-masthead">
            <h1 id="bard-title">The Bard Named Blythe</h1>
            <Link
              className="bard-instagram-button"
              href="https://www.instagram.com/thebardnamedblythe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
              Instagram
            </Link>
          </header>

          <article className="bard-book bard-book-featured" id="tempest-lullaby">
            <figure className="bard-cover-frame bard-tempest-cover">
              <Image
                src="/images/tempest-lullaby-cover.jpg"
                alt="Cover of The Tempest Lullaby"
                width={1448}
                height={2048}
                sizes="(max-width: 760px) 78vw, 330px"
                priority
              />
            </figure>
            <div className="bard-book-copy">
              <h2>The Tempest Lullaby</h2>
              <p>
                The Tempest Lullaby: And Other Poems, Limericks, and Riddles is a delightful collection that invites readers of all ages to explore the whimsical and profound through playful verses, clever riddles, and timeless reminders. From the soothing melody of a storm put to bed to limericks that spark laughter and rhymes that nudge us toward kindness, this book is a celebration of wordplay and wonder.
              </p>
              <div className="bard-retailer-buttons" aria-label="Retailer links">
                <Link
                  href="https://www.amazon.com/Tempest-Lullaby-Other-Limericks-Riddles-ebook/dp/B0DPTBMJ1Y/ref=sr_1_1?crid=2MUE3Z0W2FJK6&dib=eyJ2IjoiMSJ9.Q72L_9TQlrTyd9MgY3fSSVZAoNGKdU9b5MTGK4qAHDYq6Z72VPE0rB3yP6Ykl5pGzA_zMS4K8IV8RemUkofTIenfW2v5Avj4BFXrrCv9j7TvG7TK8OwTGVogk0zKenvEIdB73NKAJHimi2VEq7NM4vqF-cQ742Egj2hktSRF3-XDJnVgOow1m2ynHYCTdBt8BSmVkDeOlt-ryoviIzC3IXeu0J685IGcFbFGu7npO7M.nMlUTWJA0XE7Qe8sQz2fCGN0tkQQZaYbinTuQeeCnSs&dib_tag=se&keywords=tempest+lullaby&qid=1788096137&sprefix=tempest+lullayb%2Caps%2C174&sr=8-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Amazon
                </Link>
                <Link
                  href="https://www.barnesandnoble.com/w/the-tempest-lullaby-marion-cosey/1146649732?ean=9798992106633"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Barnes &amp; Noble
                </Link>
              </div>
            </div>
          </article>

          <article className="bard-book bard-book-upcoming" id="bumble-bee-bridge">
            <figure className="bard-cover-placeholder" aria-label="Cover placeholder for The Bumble Bee Bridge">
              <span>Cover to come</span>
              <strong>The Bumble Bee Bridge</strong>
            </figure>
            <div className="bard-book-copy">
              <p className="bard-book-status">Coming soon</p>
              <h2>The Bumble Bee Bridge</h2>
              <p>Additional details to come.</p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
