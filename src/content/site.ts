export const navigation = [
  { label: "Home", href: "/" },
  { label: "Fate of Creation", href: "/fate-of-creation" },
  { label: "The Bard Named Blythe", href: "/the-bard-named-blythe" },
  { label: "Other Works", href: "/other-works" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const writingProjects = [
  {
    series: "Fate of Creation I",
    title: "First Draft",
    progress: 100,
  },
  {
    series: "Fate of Creation II",
    title: "First Draft",
    progress: 100,
  },
  {
    series: "Fate of Creation III",
    title: "First Draft",
    progress: 27,
  },
] as const;

export const plannedPages = {
  "fate-of-creation": { eyebrow: "The epic fantasy series", title: "Fate of Creation" },
  "the-bard-named-blythe": { eyebrow: "A tale in the making", title: "The Bard Named Blythe" },
  "other-works": { eyebrow: "Stories beyond the known map", title: "Other Works" },
  about: { eyebrow: "Behind the stories", title: "About" },
  blog: { eyebrow: "Letters from the writing desk", title: "Blog" },
  contact: { eyebrow: "Send word", title: "Contact" },
} as const;

export type PlannedPageSlug = keyof typeof plannedPages;
