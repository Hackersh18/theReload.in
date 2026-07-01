"use client";

import { useState } from "react";
import type { Testimonial } from "@/types";
import { Avatar } from "@/components/avatar";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function TestimonialShowcase({
  items,
  className,
}: {
  items: Testimonial[];
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <div
        key={active}
        className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="max-w-2xl">
          <Icon name="quote" size={28} className="tm-item text-accent" />
          <blockquote className="tm-item mt-4 text-2xl font-semibold leading-snug text-white sm:text-3xl">
            &ldquo;{current.quote}&rdquo;
          </blockquote>
          <div className="tm-item mt-6 flex items-center gap-3">
            <Avatar name={current.name} />
            <div>
              <p className="text-sm font-bold text-white">{current.name}</p>
              <p className="text-sm text-white/60">
                {current.role}, {current.company}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
          {items.map((item, i) => (
            <button
              key={item.company}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-bold transition-all duration-300",
                i === active
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:text-white",
              )}
            >
              {item.company}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
