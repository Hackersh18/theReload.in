import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="bg-watermark pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="mx-auto max-w-3xl px-5 pb-14 pt-nav text-center sm:px-6 sm:pb-20 sm:pt-[calc(var(--nav-offset)+2.5rem)]">
        <Reveal immediate>
          <div className="flex justify-center">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        </Reveal>
        <Reveal immediate delay={80}>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal immediate delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>
        </Reveal>
        {children && (
          <Reveal immediate delay={240}>
            <div className="mt-8 flex justify-center">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
