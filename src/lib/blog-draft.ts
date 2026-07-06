import type { Post, PostCategory, PostSection } from "@/types";
import { slugify } from "@/lib/utils";

const CATEGORIES: PostCategory[] = [
  "Development",
  "Design",
  "Business",
  "SaaS",
  "Case Study",
];

export function isPostCategory(value: string): value is PostCategory {
  return CATEGORIES.includes(value as PostCategory);
}

export function parseSectionBody(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export function estimateReadTime(parts: string[]): number {
  const words = parts.join(" ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function buildPostDraft(input: {
  title: string;
  excerpt: string;
  category: PostCategory;
  authorName: string;
  authorRole: string;
  intro: string;
  featured: boolean;
  sections: { heading: string; body: string }[];
}): Post {
  const sections: PostSection[] = input.sections.map((section) => ({
    heading: section.heading.trim(),
    body: parseSectionBody(section.body),
  }));

  const readTime = estimateReadTime([
    input.intro,
    ...sections.flatMap((s) => s.body),
  ]);

  return {
    slug: slugify(input.title),
    title: input.title.trim(),
    excerpt: input.excerpt.trim(),
    category: input.category,
    date: new Date().toISOString().slice(0, 10),
    readTime,
    author: {
      name: input.authorName.trim(),
      role: input.authorRole.trim(),
    },
    featured: input.featured,
    intro: input.intro.trim(),
    sections,
  };
}

export { CATEGORIES as postFormCategories };
