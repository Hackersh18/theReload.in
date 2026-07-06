import { NextResponse } from "next/server";
import { requireCmsApi } from "@/lib/cms/api-auth";
import { getCmsPosts, saveCmsPosts } from "@/lib/cms/store";
import { buildPostDraft, isPostCategory } from "@/lib/blog-draft";
import type { Post } from "@/types";
import { slugify } from "@/lib/utils";

export const runtime = "nodejs";

export async function GET() {
  const denied = await requireCmsApi();
  if (denied) return denied;
  const posts = await getCmsPosts();
  return NextResponse.json({ posts });
}

export async function POST(request: Request) {
  const denied = await requireCmsApi();
  if (denied) return denied;

  try {
    const body = (await request.json()) as {
      title?: string;
      excerpt?: string;
      category?: string;
      authorName?: string;
      authorRole?: string;
      intro?: string;
      featured?: boolean;
      date?: string;
      sections?: { heading?: string; body?: string }[];
    };

    const title = body.title?.trim() ?? "";
    const excerpt = body.excerpt?.trim() ?? "";
    const category = body.category?.trim() ?? "";
    const authorName = body.authorName?.trim() ?? "";
    const authorRole = body.authorRole?.trim() ?? "";
    const intro = body.intro?.trim() ?? "";
    const sections = (body.sections ?? [])
      .map((s) => ({ heading: s.heading?.trim() ?? "", body: s.body?.trim() ?? "" }))
      .filter((s) => s.heading && s.body);

    if (!title || !excerpt || !intro || !authorName || !authorRole) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (!isPostCategory(category)) {
      return NextResponse.json({ error: "Invalid category." }, { status: 400 });
    }
    if (sections.length === 0) {
      return NextResponse.json({ error: "Add at least one section." }, { status: 400 });
    }

    const post = buildPostDraft({
      title,
      excerpt,
      category,
      authorName,
      authorRole,
      intro,
      featured: Boolean(body.featured),
      sections,
    });

    if (body.date) post.date = body.date;

    const posts = await getCmsPosts();
    const slug = post.slug;
    if (posts.some((p) => p.slug === slug)) {
      return NextResponse.json({ error: "A post with this slug already exists." }, { status: 409 });
    }

    const next = body.featured
      ? [post, ...posts.map((p) => ({ ...p, featured: false }))]
      : [post, ...posts];

    await saveCmsPosts(next);
    return NextResponse.json({ ok: true, post });
  } catch {
    return NextResponse.json({ error: "Could not create post." }, { status: 500 });
  }
}
