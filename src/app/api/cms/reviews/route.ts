import { NextResponse } from "next/server";
import { requireCmsApi } from "@/lib/cms/api-auth";
import { getCmsReviews, saveCmsReviews, getCmsTestimonials, saveCmsTestimonials } from "@/lib/cms/store";

export const runtime = "nodejs";

export async function GET() {
  const denied = await requireCmsApi();
  if (denied) return denied;
  const reviews = await getCmsReviews();
  return NextResponse.json({ reviews });
}
