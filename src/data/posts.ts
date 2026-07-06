import type { Post } from "@/types";
import postsData from "../../data/cms/posts.json";

export const posts: Post[] = postsData as Post[];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const featuredPost = posts.find((p) => p.featured) ?? posts[0];

export const postCategories = [
  "All",
  "Development",
  "Design",
  "Business",
  "SaaS",
  "Case Study",
] as const;
