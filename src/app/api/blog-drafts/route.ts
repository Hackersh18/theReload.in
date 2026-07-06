import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { buildPostDraft, isPostCategory } from "@/lib/blog-draft";
import { isValidBlogAccess } from "@/lib/blog-access";
import type { Post } from "@/types";

export const runtime = "nodejs";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "blog-drafts.json");

export interface BlogDraftSubmission {
  id: string;
  createdAt: string;
  post: Post;
}

async function readDrafts(): Promise<BlogDraftSubmission[]> {
  try {
    const raw = await readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as BlogDraftSubmission[]) : [];
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      access?: string;
      title?: string;
      excerpt?: string;
      category?: string;
      authorName?: string;
      authorRole?: string;
      intro?: string;
      featured?: boolean;
      sections?: { heading?: string; body?: string }[];
    };

    if (!isValidBlogAccess(body.access)) {
      return NextResponse.json({ error: "Invalid access." }, { status: 403 });
    }

    const title = body.title?.trim() ?? "";
    const excerpt = body.excerpt?.trim() ?? "";
    const category = body.category?.trim() ?? "";
    const authorName = body.authorName?.trim() ?? "";
    const authorRole = body.authorRole?.trim() ?? "";
    const intro = body.intro?.trim() ?? "";
    const featured = Boolean(body.featured);
    const sections = (body.sections ?? [])
      .map((section) => ({
        heading: section.heading?.trim() ?? "",
        body: section.body?.trim() ?? "",
      }))
      .filter((section) => section.heading && section.body);

    if (!title || !excerpt || !intro) {
      return NextResponse.json(
        { error: "Title, excerpt, and intro are required." },
        { status: 400 },
      );
    }

    if (!isPostCategory(category)) {
      return NextResponse.json({ error: "Choose a valid category." }, { status: 400 });
    }

    if (!authorName || !authorRole) {
      return NextResponse.json(
        { error: "Author name and role are required." },
        { status: 400 },
      );
    }

    if (sections.length === 0) {
      return NextResponse.json(
        { error: "Add at least one section with a heading and body." },
        { status: 400 },
      );
    }

    const post = buildPostDraft({
      title,
      excerpt,
      category,
      authorName,
      authorRole,
      intro,
      featured,
      sections,
    });

    const submission: BlogDraftSubmission = {
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      post,
    };

    const existing = await readDrafts();
    await mkdir(DATA_DIR, { recursive: true });
    await writeFile(DATA_FILE, JSON.stringify([submission, ...existing], null, 2), "utf8");

    return NextResponse.json({
      ok: true,
      id: submission.id,
      slug: post.slug,
      readTime: post.readTime,
    });
  } catch {
    return NextResponse.json(
      { error: "Could not save this blog draft. Please try again." },
      { status: 500 },
    );
  }
}
