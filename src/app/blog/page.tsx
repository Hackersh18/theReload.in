import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/bento";
import { PageHero } from "@/components/sections/page-hero";
import { BlogList } from "@/components/sections/blog-list";
import { Reveal } from "@/components/reveal";
import { Avatar } from "@/components/avatar";
import { Tag } from "@/components/ui";
import { Icon } from "@/components/icons";
import { featuredPost } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/data/site";

/*
 * SEO notes for the blog index:
 * - generateMetadata sets <title>, <meta description>, Open Graph, and a
 *   canonical URL (below) — the foundations for organic search.
 * - Each individual post (app/blog/[slug]) adds JSON-LD Article structured
 *   data so Google can render rich results.
 * - Posts are statically rendered (generateStaticParams) for fast, crawlable
 *   HTML — ideal for SEO-first content.
 */
export const metadata: Metadata = {
  title: "Insights",
  description:
    "Engineering notes on architecture, SaaS, and shipping production software — from the Reload team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Insights · ${siteConfig.name}`,
    description:
      "Engineering notes on architecture, SaaS, and shipping production software — from the Reload team.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering notes"
        title="Insights"
        description="Field notes on building durable software — the design systems, architecture calls, and product decisions that actually move the needle."
      />

      {/* Featured / pinned post */}
      <Section className="pb-6">
        <Reveal>
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group grid overflow-hidden rounded-[var(--radius-bento)] border border-border bg-surface transition-all duration-300 hover:border-border-strong hover:shadow-[0_16px_50px_-18px_rgba(0,0,0,0.2)] lg:grid-cols-2"
          >
            <div className="relative min-h-56 border border-accent/20 bg-foreground p-8">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.22), transparent 45%)",
                }}
              />
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/20" />
              <span className="relative inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                <Icon name="sparkles" size={14} /> Featured
              </span>
              <p className="relative mt-auto pt-24 text-3xl font-extrabold leading-tight tracking-tight text-accent sm:text-4xl">
                {featuredPost.title}
              </p>
            </div>

            <div className="flex flex-col justify-center p-8">
              <div className="flex items-center gap-3 text-xs text-muted">
                <Tag>{featuredPost.category}</Tag>
                <span>{featuredPost.readTime} min read</span>
                <time dateTime={featuredPost.date}>
                  {formatDate(featuredPost.date)}
                </time>
              </div>
              <p className="mt-5 text-base leading-relaxed text-muted">
                {featuredPost.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar name={featuredPost.author.name} size={36} />
                <div className="text-sm">
                  <p className="font-medium text-foreground">
                    {featuredPost.author.name}
                  </p>
                  <p className="text-muted">{featuredPost.author.role}</p>
                </div>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                Read article
                <Icon
                  name="arrowRight"
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </span>
            </div>
          </Link>
        </Reveal>
      </Section>

      <Section className="pt-6">
        <BlogList />
      </Section>
    </>
  );
}
