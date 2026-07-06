import { NextResponse } from "next/server";
import { requireCmsApi } from "@/lib/cms/api-auth";
import { getCmsReviews, saveCmsReviews, getCmsTestimonials, saveCmsTestimonials } from "@/lib/cms/store";

export const runtime = "nodejs";

type Params = { params: Promise<{ id: string }> };

export async function DELETE(_request: Request, { params }: Params) {
  const denied = await requireCmsApi();
  if (denied) return denied;

  const { id } = await params;
  const reviews = await getCmsReviews();
  const next = reviews.filter((r) => r.id !== id);
  if (next.length === reviews.length) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  await saveCmsReviews(next);
  return NextResponse.json({ ok: true });
}

export async function POST(_request: Request, { params }: Params) {
  const denied = await requireCmsApi();
  if (denied) return denied;

  const { id } = await params;
  const reviews = await getCmsReviews();
  const review = reviews.find((r) => r.id === id);
  if (!review) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (!review.canPublish) {
    return NextResponse.json({ error: "Client did not allow publishing." }, { status: 400 });
  }

  const testimonials = await getCmsTestimonials();
  testimonials.unshift({
    quote: review.quote,
    name: review.name,
    role: review.role,
    company: review.company,
  });
  await saveCmsTestimonials(testimonials);
  await saveCmsReviews(reviews.filter((r) => r.id !== id));

  return NextResponse.json({ ok: true });
}
