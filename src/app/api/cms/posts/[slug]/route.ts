import { NextResponse } from "next/server";
import { requireCmsApi } from "@/lib/cms/api-auth";
import { getCmsPosts, saveCmsPosts } from "@/lib/cms/store";
import { buildPostDraft, isPostCategory } from "@/lib/blog-draft";
import type { Post } from "@/types";

export const runtime = "nodejs";

type Params = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, { params }: Params) {
  const denied = await requireCmsApi();
  if (denied) return denied;

  const { slug } = await params;
  const post = (await getCmsPosts()).find((p) => p.slug === slug);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ post });
}

export async function PUT(request: Request, { params }: Params) {
  const denied = await requireCmsApi();
  if (denied) return denied;

  const { slug } = await params;

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

    const posts = await getCmsPosts();
    const index = posts.findIndex((p) => p.slug === slug);
    if (index === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });

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

    const updated = buildPostDraft({
      title,
      excerpt,
      category,
      authorName,
      authorRole,
      intro,
      featured: Boolean(body.featured),
      sections,
    });

    updated.slug = slug;
    if (body.date) updated.date = body.date;

    let next = [...posts];
    next[index] = updated;

    if (updated.featured) {
      next = next.map((p) => ({ ...p, featured: p.slug === slug }));
    }

    await saveCmsPosts(next);
    return NextResponse.json({ ok: true, post: updated });
  } catch {
    return NextResponse.json({ error: "Could not update post." }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  const denied = await requireCmsApi();
  if (denied) return denied;

  const { slug } = await params;
  const posts = await getCmsPosts();
  const next = posts.filter((p) => p.slug !== slug);
  if (next.length === posts.length) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  await saveCmsPosts(next);
  return NextResponse.json({ ok: true });
}
