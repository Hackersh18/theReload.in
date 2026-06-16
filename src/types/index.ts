import type { IconName } from "@/components/icons";

export type ServiceCategory = "Web Apps" | "Design" | "SaaS" | "Consulting";

export interface Service {
  slug: string;
  icon: IconName;
  title: string;
  summary: string;
  description: string;
  process: string[];
  tags: string[];
}

export interface CaseStudy {
  duration: string;
  role: string;
  services: string[];
  tech: string[];
  challenge: string;
  approach: string[];
  results: Metric[];
  quote?: { text: string; name: string; role: string };
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: ServiceCategory;
  outcome: string;
  /** Hex color used for the CSS-drawn placeholder thumbnail. */
  color: string;
  /** Initials shown on the thumbnail. */
  initials: string;
  year: string;
  caseStudy: CaseStudy;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface ClientLogo {
  name: string;
}

export type PostCategory =
  | "Development"
  | "Design"
  | "Business"
  | "SaaS"
  | "Case Study";

export interface PostSection {
  heading: string;
  /** Each string is a paragraph. */
  body: string[];
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  date: string; // ISO date
  readTime: number; // minutes
  author: {
    name: string;
    role: string;
  };
  featured?: boolean;
  intro: string;
  sections: PostSection[];
}

export interface Faq {
  question: string;
  answer: string;
}
