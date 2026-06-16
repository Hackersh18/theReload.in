"use client";

import { useState } from "react";
import { PostCard } from "@/components/post-card";
import { posts, postCategories } from "@/data/posts";
import { cn } from "@/lib/utils";

export function BlogList() {
  const [active, setActive] =
    useState<(typeof postCategories)[number]>("All");

  // The featured post is pinned above; the grid covers the rest.
  const rest = posts.filter((p) => !p.featured);
  const filtered =
    active === "All" ? rest : rest.filter((p) => p.category === active);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter articles by topic"
        className="flex flex-wrap justify-center gap-2"
      >
        {postCategories.map((category) => {
          const isActive = active === category;
          return (
            <button
              key={category}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-surface text-muted hover:border-border-strong hover:text-foreground",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-muted">
          No articles in this topic yet. Check back soon.
        </p>
      )}
    </div>
  );
}
