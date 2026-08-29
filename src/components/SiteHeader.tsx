import Link from "next/link";
import { navigation } from "@/content/site";

type SiteHeaderProps = { activeHref?: string };

export function SiteHeader({ activeHref = "/" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link className={item.href === activeHref ? "active" : undefined} href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <details className="mobile-nav">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link className={item.href === activeHref ? "active" : undefined} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
