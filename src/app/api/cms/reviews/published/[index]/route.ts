import { NextResponse } from "next/server";
import { requireCmsApi } from "@/lib/cms/api-auth";
import { getCmsTestimonials, saveCmsTestimonials } from "@/lib/cms/store";

export const runtime = "nodejs";

type Params = { params: Promise<{ index: string }> };

export async function DELETE(_request: Request, { params }: Params) {
  const denied = await requireCmsApi();
  if (denied) return denied;

  const { index } = await params;
  const i = Number(index);
  const published = await getCmsTestimonials();
  if (!Number.isInteger(i) || i < 0 || i >= published.length) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  published.splice(i, 1);
  await saveCmsTestimonials(published);
  return NextResponse.json({ ok: true });
}
