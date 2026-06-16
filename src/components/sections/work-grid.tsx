"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { projects, projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

export function WorkGrid() {
  const [active, setActive] =
    useState<(typeof projectCategories)[number]>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="flex flex-wrap justify-center gap-2"
      >
        {projectCategories.map((category) => {
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
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} className="h-full" />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-muted">
          No projects in this category yet — but we&rsquo;d love to make yours
          the first.
        </p>
      )}
    </div>
  );
}
