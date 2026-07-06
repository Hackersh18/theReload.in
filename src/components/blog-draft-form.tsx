"use client";

import { useState } from "react";
import { postFormCategories } from "@/lib/blog-draft";
import { buttonClasses } from "@/components/ui";
import { Icon } from "@/components/icons";

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/70 transition-colors focus:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40";
const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

type SectionFields = { heading: string; body: string };

const emptySection = (): SectionFields => ({ heading: "", body: "" });

export function BlogDraftForm({ accessToken }: { accessToken?: string }) {
  const [sections, setSections] = useState<SectionFields[]>([
    emptySection(),
    emptySection(),
  ]);
  const [submitted, setSubmitted] = useState<{ slug: string; readTime: number } | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateSection(index: number, patch: Partial<SectionFields>) {
    setSections((current) =>
      current.map((section, i) => (i === index ? { ...section, ...patch } : section)),
    );
  }

  function addSection() {
    setSections((current) => [...current, emptySection()]);
  }

  function removeSection(index: number) {
    setSections((current) => current.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/blog-drafts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access: accessToken,
          title: data.get("title"),
          excerpt: data.get("excerpt"),
          category: data.get("category"),
          authorName: data.get("authorName"),
          authorRole: data.get("authorRole"),
          intro: data.get("intro"),
          featured: data.get("featured") === "on",
          sections,
        }),
      });

      const json = (await res.json()) as {
        error?: string;
        slug?: string;
        readTime?: number;
      };

      if (!res.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted({
        slug: json.slug ?? "",
        readTime: json.readTime ?? 0,
      });
      form.reset();
      setSections([emptySection(), emptySection()]);
    } catch {
      setError("Could not save this draft. Check your connection and try again.");
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
          Blog draft saved
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          Slug: <span className="font-mono text-foreground">{submitted.slug}</span>
          <br />
          Estimated read time: {submitted.readTime} min
          <br />
          Copy the entry from <span className="font-mono">data/blog-drafts.json</span> into{" "}
          <span className="font-mono">src/data/posts.ts</span> to publish it on the site.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(null)}
          className="text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
        >
          Add another post
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
        <div>
          <label className={labelClass} htmlFor="title">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            placeholder="Why your SaaS needs a design system first"
            className={fieldClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="excerpt">
            Excerpt
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            required
            rows={2}
            placeholder="One or two sentences for the blog listing card."
            className={`${fieldClass} resize-y`}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="category">
              Category
            </label>
            <select id="category" name="category" required defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Select one
              </option>
              {postFormCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
              <input
                type="checkbox"
                name="featured"
                className="h-4 w-4 rounded border-border text-accent focus:ring-ring"
              />
              <span className="text-sm font-medium text-foreground">Feature on blog home</span>
            </label>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="authorName">
              Author name
            </label>
            <input
              id="authorName"
              name="authorName"
              type="text"
              required
              placeholder="Priya Nair"
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="authorRole">
              Author role
            </label>
            <input
              id="authorRole"
              name="authorRole"
              type="text"
              required
              placeholder="Head of Design"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="intro">
            Intro paragraph
          </label>
          <textarea
            id="intro"
            name="intro"
            required
            rows={4}
            placeholder="Opening paragraph shown at the top of the article."
            className={`${fieldClass} resize-y`}
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-bold text-foreground">Article sections</p>
            <button
              type="button"
              onClick={addSection}
              disabled={sections.length >= 6}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover disabled:opacity-50"
            >
              <Icon name="plus" size={16} />
              Add section
            </button>
          </div>

          {sections.map((section, index) => (
            <div
              key={`section-${index}`}
              className="rounded-2xl border border-border bg-background/60 p-4 sm:p-5"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  Section {index + 1}
                </p>
                {sections.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSection(index)}
                    className="text-xs font-semibold text-muted hover:text-foreground"
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="grid gap-4">
                <div>
                  <label className={labelClass} htmlFor={`section-heading-${index}`}>
                    Heading
                  </label>
                  <input
                    id={`section-heading-${index}`}
                    type="text"
                    value={section.heading}
                    onChange={(e) => updateSection(index, { heading: e.target.value })}
                    placeholder="Why this matters"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor={`section-body-${index}`}>
                    Body
                  </label>
                  <textarea
                    id={`section-body-${index}`}
                    value={section.body}
                    onChange={(e) => updateSection(index, { body: e.target.value })}
                    rows={5}
                    placeholder="Write paragraphs separated by a blank line."
                    className={`${fieldClass} resize-y`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

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
          {loading ? "Saving…" : "Save blog draft"}
          <Icon name="arrowRight" size={16} />
        </button>
      </div>
    </form>
  );
}
