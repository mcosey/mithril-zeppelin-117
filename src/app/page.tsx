import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { WritingProgress } from "@/components/WritingProgress";

export default function Home() {
  return (
    <main id="home">
      <section className="hero" aria-labelledby="site-title">
        <Image
          className="hero-map"
          src="/images/world-map.jpg"
          alt="An antique fantasy world map"
          fill
          priority
          quality={88}
          sizes="(max-width: 760px) 100vw, 72vw"
        />
        <div className="hero-wash" aria-hidden="true" />
        <SiteHeader />
        <div className="hero-content">
          <div className="hero-copy">
            <div className="rule" aria-hidden="true"><span /></div>
            <h1 id="site-title">Mithril Zeppelin 117</h1>
            <p className="publishing">Publishing</p>
            <div className="title-mark" aria-hidden="true"><span /></div>
          </div>
        </div>
      </section>
      <WritingProgress />
      <footer>
        <p>© Mithril Zeppelin 117 Publishing</p>
      </footer>
    </main>
  );
}
