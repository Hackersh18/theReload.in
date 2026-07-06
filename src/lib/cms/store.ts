import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import type { Post, Testimonial } from "@/types";
import type { ReviewSubmission } from "@/app/api/reviews/route";

const DATA_DIR = path.join(process.cwd(), "data");
const CMS_DIR = path.join(DATA_DIR, "cms");

async function readJson<T>(file: string, fallback: T): Promise<T> {
  try {
    const raw = await readFile(file, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeJson<T>(file: string, data: T): Promise<void> {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, JSON.stringify(data, null, 2), "utf8");
}

const postsFile = path.join(CMS_DIR, "posts.json");
const testimonialsFile = path.join(CMS_DIR, "testimonials.json");
const reviewsFile = path.join(DATA_DIR, "review-submissions.json");

export async function getCmsPosts(): Promise<Post[]> {
  return readJson<Post[]>(postsFile, []);
}

export async function saveCmsPosts(posts: Post[]): Promise<void> {
  await writeJson(postsFile, posts);
}

export async function getCmsTestimonials(): Promise<Testimonial[]> {
  return readJson<Testimonial[]>(testimonialsFile, []);
}

export async function saveCmsTestimonials(testimonials: Testimonial[]): Promise<void> {
  await writeJson(testimonialsFile, testimonials);
}

export async function getCmsReviews(): Promise<ReviewSubmission[]> {
  return readJson<ReviewSubmission[]>(reviewsFile, []);
}

export async function saveCmsReviews(reviews: ReviewSubmission[]): Promise<void> {
  await writeJson(reviewsFile, reviews);
}
