/**
 * Central brand + site configuration.
 * Reload — web development & software solutions studio.
 */
export const siteConfig = {
  name: "Reload",
  legalName: "Reload Software Studio",
  tagline: "We build software that ships.",
  description:
    "Reload is a web development and software studio. We design, build, and launch production-ready web apps, SaaS products, and internal tools for startups and growing teams.",
  calLink: "https://cal.com/reload",
  url: "https://reload.dev",
  locale: "en_US",
  email: "hello@reload.dev",
  phone: "+1 (312) 555-0192",
  location: "Chicago, IL",
  socials: {
    twitter: "https://x.com/reload",
    linkedin: "https://www.linkedin.com/company/reload",
    github: "https://github.com/reload",
  },
  twitterHandle: "@reload",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
] as const;
