import { NextResponse } from "next/server";
import { isCmsAuthenticated } from "@/lib/cms/access";

export async function requireCmsApi(): Promise<NextResponse | null> {
  if (!(await isCmsAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
