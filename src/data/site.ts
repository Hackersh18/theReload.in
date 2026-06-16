/**
 * Central brand + site configuration.
 * SoftSole — web development & software solutions studio.
 */
export const siteConfig = {
  name: "SoftSole",
  legalName: "SoftSole Software Studio",
  tagline: "We build software that ships.",
  description:
    "SoftSole is a web development and software studio. We design, build, and launch production-ready web apps, SaaS products, and internal tools for startups and growing teams.",
  calLink: "https://cal.com/softsole",
  url: "https://softsole.dev",
  locale: "en_US",
  email: "hello@softsole.dev",
  phone: "+1 (312) 555-0192",
  location: "Chicago, IL",
  socials: {
    twitter: "https://x.com/softsole",
    linkedin: "https://www.linkedin.com/company/softsole",
    github: "https://github.com/softsole",
  },
  twitterHandle: "@softsole",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
] as const;
