import type { Metadata } from "next";
import { FateOfCreationReader } from "@/components/FateOfCreationReader";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "The Fate of Creation | Mithril Zeppelin 117 Publishing",
  description: "Enter the world of The Fate of Creation and explore the beginning of Ebon Yard.",
};

export default function FateOfCreationPage() {
  return (
    <main className="foc-page">
      <SiteHeader activeHref="/fate-of-creation" />
      <FateOfCreationReader />
    </main>
  );
}
