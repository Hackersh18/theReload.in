"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { ReviewSubmission } from "@/app/api/reviews/route";
import type { Testimonial } from "@/types";
import { buttonClasses } from "@/components/ui";
import { Icon } from "@/components/icons";

export function ReviewsPanel({
  reviews,
  published,
}: {
  reviews: ReviewSubmission[];
  published: Testimonial[];
}) {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);

  async function act(id: string, action: "delete" | "promote") {
    const label = action === "promote" ? "publish to the site" : "delete";
    if (!confirm(`Are you sure you want to ${label} this review?`)) return;
    setBusy(`${action}:${id}`);
    try {
      const res = await fetch(`/api/cms/reviews/${id}`, {
        method: action === "promote" ? "POST" : "DELETE",
      });
      if (!res.ok) {
        const json = (await res.json()) as { error?: string };
        alert(json.error ?? "Action failed.");
        return;
      }
      router.refresh();
    } finally {
      setBusy(null);
    }
  }

  async function unpublish(index: number) {
    if (!confirm("Remove this review from the website?")) return;
    setBusy(`unpublish:${index}`);
    try {
      const res = await fetch(`/api/cms/reviews/published/${index}`, { method: "DELETE" });
      if (!res.ok) {
        const json = (await res.json()) as { error?: string };
        alert(json.error ?? "Could not unpublish.");
        return;
      }
      router.refresh();
    } finally {
      setBusy(null);
    }
  }

  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-white/45">
          Pending ({reviews.length})
        </h2>
        {reviews.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-12 text-center">
            <p className="text-sm text-white/55">No pending reviews.</p>
            <p className="mt-2 text-xs text-white/35">
              Share the private review link with clients to collect feedback.
            </p>
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-white">{review.name}</p>
                    <p className="text-sm text-white/55">
                      {review.role} · {review.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/45">
                    <span>{new Date(review.createdAt).toLocaleDateString()}</span>
                    <span>·</span>
                    <span>{review.rating}/5</span>
                    {review.canPublish ? (
                      <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 font-semibold text-emerald-300">
                        Can publish
                      </span>
                    ) : (
                      <span className="rounded-full bg-white/10 px-2 py-0.5 font-semibold text-white/50">
                        Private only
                      </span>
                    )}
                  </div>
                </div>
                {review.project && (
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/35">
                    Project: {review.project}
                  </p>
                )}
                <blockquote className="mt-4 border-l-2 border-accent/50 pl-4 text-sm leading-relaxed text-white/80">
                  {review.quote}
                </blockquote>
                <div className="mt-5 flex flex-wrap gap-2">
                  {review.canPublish && (
                    <button
                      type="button"
                      disabled={busy !== null}
                      onClick={() => act(review.id, "promote")}
                      className={buttonClasses("primary", "sm", "disabled:opacity-50")}
                    >
                      <Icon name="quote" size={16} />
                      {busy === `promote:${review.id}` ? "Publishing…" : "Publish to site"}
                    </button>
                  )}
                  <button
                    type="button"
                    disabled={busy !== null}
                    onClick={() => act(review.id, "delete")}
                    className={buttonClasses(
                      "secondary",
                      "sm",
                      "border-white/15 bg-transparent text-white/70 hover:bg-white/5",
                    )}
                  >
                    {busy === `delete:${review.id}` ? "Deleting…" : "Delete"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-white/45">
          Live on site ({published.length})
        </h2>
        {published.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-10 text-center">
            <p className="text-sm text-white/55">No reviews published yet.</p>
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            {published.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-5"
              >
                <blockquote className="text-sm leading-relaxed text-white/80">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-sm font-semibold text-white">{item.name}</p>
                <p className="text-sm text-white/55">
                  {item.role} · {item.company}
                </p>
                <button
                  type="button"
                  disabled={busy !== null}
                  onClick={() => unpublish(index)}
                  className="mt-4 text-sm font-medium text-white/45 hover:text-red-300"
                >
                  {busy === `unpublish:${index}` ? "Removing…" : "Remove from site"}
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
