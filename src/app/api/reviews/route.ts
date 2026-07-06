import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { isValidReviewAccess } from "@/lib/review-access";

export const runtime = "nodejs";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "review-submissions.json");

export interface ReviewSubmission {
  id: string;
  createdAt: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  project: string;
  quote: string;
  canPublish: boolean;
}

async function readSubmissions(): Promise<ReviewSubmission[]> {
  try {
    const raw = await readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as ReviewSubmission[]) : [];
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      access?: string;
      name?: string;
      role?: string;
      company?: string;
      rating?: number;
      project?: string;
      quote?: string;
      canPublish?: boolean;
    };

    if (!isValidReviewAccess(body.access)) {
      return NextResponse.json({ error: "Invalid access." }, { status: 403 });
    }

    const name = body.name?.trim() ?? "";
    const role = body.role?.trim() ?? "";
    const company = body.company?.trim() ?? "";
    const project = body.project?.trim() ?? "";
    const quote = body.quote?.trim() ?? "";
    const rating = Number(body.rating);
    const canPublish = Boolean(body.canPublish);

    if (!name || !role || !company || !quote) {
      return NextResponse.json(
        { error: "Name, role, company, and review are required." },
        { status: 400 },
      );
    }

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Rating must be between 1 and 5." }, { status: 400 });
    }

    if (quote.length < 20) {
      return NextResponse.json(
        { error: "Please write at least a few sentences for your review." },
        { status: 400 },
      );
    }

    const submission: ReviewSubmission = {
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      name,
      role,
      company,
      rating,
      project,
      quote,
      canPublish,
    };

    const existing = await readSubmissions();
    await mkdir(DATA_DIR, { recursive: true });
    await writeFile(DATA_FILE, JSON.stringify([submission, ...existing], null, 2), "utf8");

    return NextResponse.json({ ok: true, id: submission.id });
  } catch {
    return NextResponse.json(
      { error: "Could not save your review. Please try again or email us directly." },
      { status: 500 },
    );
  }
}
