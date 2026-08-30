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
  about: {
    title: "About",
    body: "I honestly didn't have the time, inclination, or patience to write something here, but I will (try) eventually!",
  },
} as const;

export type PlannedPageSlug = keyof typeof plannedPages;
