"use client";

import { useState } from "react";
import { buttonClasses } from "@/components/ui";
import { Icon } from "@/components/icons";

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/70 transition-colors focus:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40";
const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

export function ReviewForm({ accessToken }: { accessToken?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rating, setRating] = useState(5);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access: accessToken,
          name: data.get("name"),
          role: data.get("role"),
          company: data.get("company"),
          rating,
          project: data.get("project"),
          quote: data.get("quote"),
          canPublish: data.get("canPublish") === "on",
        }),
      });

      const json = (await res.json()) as { error?: string };

      if (!res.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      form.reset();
      setRating(5);
    } catch {
      setError("Could not submit your review. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[var(--radius-bento)] border border-border bg-surface p-8 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-accent-subtle text-accent">
          <Icon name="check" size={26} />
        </span>
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
          Thank you
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Your review was received. We appreciate you taking the time to share
          your experience with Reload.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
        >
          Submit another review
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[var(--radius-bento)] border border-border bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="name">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Jane Doe"
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="company">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              autoComplete="organization"
              placeholder="Acme Inc."
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="role">
            Role / title
          </label>
          <input
            id="role"
            name="role"
            type="text"
            required
            placeholder="Founder, VP Engineering, etc."
            className={fieldClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="project">
            Project worked on{" "}
            <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="project"
            name="project"
            type="text"
            placeholder="e.g. CRM Portal, college website, AI agent"
            className={fieldClass}
          />
        </div>

        <div>
          <span className={labelClass}>Rating</span>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                className={`h-10 min-w-10 rounded-xl border px-3 text-sm font-bold transition-colors ${
                  rating === value
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-background text-muted hover:border-border-strong"
                }`}
                aria-pressed={rating === value}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="quote">
            Your review
          </label>
          <textarea
            id="quote"
            name="quote"
            required
            minLength={20}
            rows={6}
            placeholder="What did we build together? What went well? Would you recommend Reload?"
            className={`${fieldClass} resize-y`}
          />
        </div>

        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-background px-4 py-3">
          <input
            type="checkbox"
            name="canPublish"
            defaultChecked
            className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-ring"
          />
          <span className="text-sm leading-relaxed text-muted">
            Reload may feature this review on the website or marketing materials
            (with your name and company).
          </span>
        </label>

        {error && (
          <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-300">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={buttonClasses("primary", "lg", "w-full sm:w-auto disabled:opacity-60")}
        >
          {loading ? "Sending…" : "Submit review"}
          <Icon name="arrowRight" size={16} />
        </button>
      </div>
    </form>
  );
}
