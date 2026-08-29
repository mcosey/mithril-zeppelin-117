export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "The Fate of Creation", href: "/fate-of-creation" },
  { label: "The Bard Named Blythe", href: "/the-bard-named-blythe" },
  { label: "Other Works", href: "/other-works" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const writingProjects = [
  {
    series: "The Fate of Creation I",
    title: "First Draft",
    progress: 100,
  },
  {
    series: "The Fate of Creation II",
    title: "First Draft",
    progress: 100,
  },
  {
    series: "The Fate of Creation III",
    title: "First Draft",
    progress: 27,
  },
] as const;

export const plannedPages = {
  "the-bard-named-blythe": { eyebrow: "A tale in the making", title: "The Bard Named Blythe" },
  "other-works": { eyebrow: "Stories beyond the known map", title: "Other Works" },
  about: { eyebrow: "Behind the stories", title: "About" },
  blog: { eyebrow: "Letters from the writing desk", title: "Blog" },
} as const;

export type PlannedPageSlug = keyof typeof plannedPages;
