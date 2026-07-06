"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Post } from "@/types";
import { postFormCategories } from "@/lib/blog-draft";
import { buttonClasses } from "@/components/ui";
import { Icon } from "@/components/icons";

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 transition-colors focus:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30";
const labelClass = "mb-1.5 block text-sm font-medium text-white/85";

type SectionFields = { heading: string; body: string };
const emptySection = (): SectionFields => ({ heading: "", body: "" });

export function PostEditor({
  initial,
  mode,
}: {
  initial?: Post;
  mode: "create" | "edit";
}) {
  const router = useRouter();
  const [sections, setSections] = useState<SectionFields[]>(
    initial?.sections.map((s) => ({ heading: s.heading, body: s.body.join("\n\n") })) ?? [
      emptySection(),
      emptySection(),
    ],
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateSection(index: number, patch: Partial<SectionFields>) {
    setSections((current) =>
      current.map((section, i) => (i === index ? { ...section, ...patch } : section)),
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      title: data.get("title"),
      excerpt: data.get("excerpt"),
      category: data.get("category"),
      authorName: data.get("authorName"),
      authorRole: data.get("authorRole"),
      intro: data.get("intro"),
      date: data.get("date"),
      featured: data.get("featured") === "on",
      sections,
    };

    const url =
      mode === "create" ? "/api/cms/posts" : `/api/cms/posts/${initial?.slug}`;
    const method = mode === "create" ? "POST" : "PUT";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { error?: string; post?: Post };
      if (!res.ok) {
        setError(json.error ?? "Could not save post.");
        return;
      }
      router.push("/share/cms/blog");
      router.refresh();
    } catch {
      setError("Could not save post. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-5">
      <div>
        <label className={labelClass} htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          required
          defaultValue={initial?.title}
          className={fieldClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="excerpt">Excerpt</label>
        <textarea
          id="excerpt"
          name="excerpt"
          required
          rows={2}
          defaultValue={initial?.excerpt}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            required
            defaultValue={initial?.category ?? ""}
            className={fieldClass}
          >
            <option value="" disabled>Select</option>
            {postFormCategories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="date">Publish date</label>
          <input
            id="date"
            name="date"
            type="date"
            required
            defaultValue={initial?.date ?? new Date().toISOString().slice(0, 10)}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="authorName">Author</label>
          <input
            id="authorName"
            name="authorName"
            required
            defaultValue={initial?.author.name}
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="authorRole">Role</label>
          <input
            id="authorRole"
            name="authorRole"
            required
            defaultValue={initial?.author.role}
            className={fieldClass}
          />
        </div>
      </div>

      <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
        <input
          type="checkbox"
          name="featured"
          defaultChecked={initial?.featured}
          className="h-4 w-4 rounded border-white/20 text-accent"
        />
        <span className="text-sm font-medium text-white/80">Feature on blog home</span>
      </label>

      <div>
        <label className={labelClass} htmlFor="intro">Intro</label>
        <textarea
          id="intro"
          name="intro"
          required
          rows={4}
          defaultValue={initial?.intro}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-white">Sections</p>
          <button
            type="button"
            onClick={() => setSections((s) => [...s, emptySection()])}
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent"
          >
            <Icon name="plus" size={16} /> Add section
          </button>
        </div>
        {sections.map((section, index) => (
          <div key={index} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-3 flex justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-white/45">
                Section {index + 1}
              </span>
              {sections.length > 1 && (
                <button
                  type="button"
                  onClick={() => setSections((s) => s.filter((_, i) => i !== index))}
                  className="text-xs text-white/50 hover:text-white"
                >
                  Remove
                </button>
              )}
            </div>
            <div className="space-y-3">
              <input
                value={section.heading}
                onChange={(e) => updateSection(index, { heading: e.target.value })}
                placeholder="Heading"
                className={fieldClass}
              />
              <textarea
                value={section.body}
                onChange={(e) => updateSection(index, { body: e.target.value })}
                rows={4}
                placeholder="Paragraphs separated by a blank line"
                className={`${fieldClass} resize-y`}
              />
            </div>
          </div>
        ))}
      </div>

      {error && (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={loading}
          className={buttonClasses("primary", "md", "disabled:opacity-60")}
        >
          {loading ? "Saving…" : mode === "create" ? "Publish post" : "Save changes"}
        </button>
      </div>
    </form>
  );
}
