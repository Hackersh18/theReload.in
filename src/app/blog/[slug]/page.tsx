import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { Avatar } from "@/components/avatar";
import { PostCard } from "@/components/post-card";
import { TableOfContents } from "@/components/sections/toc";
import { CalButton, Tag } from "@/components/ui";
import { Icon } from "@/components/icons";
import { getPost, posts } from "@/data/posts";
import { siteConfig } from "@/data/site";
import { formatDate, slugify } from "@/lib/utils";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const toc = post.sections.map((s) => ({
    id: slugify(s.heading),
    title: s.heading,
  }));

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  // JSON-LD Article structured data for rich search results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    articleSection: post.category,
  };

  return (
    <article className="mx-auto w-full max-w-6xl px-5 pb-16 pt-nav sm:px-6 sm:pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Reveal>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          <Icon name="arrowRight" size={15} className="rotate-180" />
          All articles
        </Link>

        <div className="mx-auto mt-6 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <Tag>{post.category}</Tag>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="clock" size={15} />
              {post.readTime} min read
            </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>

          <h1 className="mt-5 font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-3 border-b border-border pb-8">
            <Avatar name={post.author.name} size={44} />
            <div className="text-sm">
              <p className="font-medium text-foreground">{post.author.name}</p>
              <p className="text-muted">{post.author.role}</p>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-12">
        {/* Article body */}
        <div className="mx-auto max-w-3xl lg:mx-0">
          <p className="font-display text-xl leading-relaxed text-foreground">
            {post.intro}
          </p>

          {post.sections.map((section) => (
            <section key={section.heading} className="mt-10 scroll-mt-24" id={slugify(section.heading)}>
              <h2 className="font-display text-2xl font-medium tracking-tight text-foreground">
                {section.heading}
              </h2>
              {section.body.map((para, i) => (
                <p
                  key={i}
                  className="mt-4 text-base leading-[1.8] text-muted"
                >
                  {para}
                </p>
              ))}
            </section>
          ))}

          {/* End-of-post CTA */}
          <div className="mt-14 rounded-[var(--radius-bento)] border border-border bg-surface-muted p-8 text-center">
            <h2 className="font-display text-2xl font-medium tracking-tight text-foreground">
              Got a project in mind?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
              We help teams design and build software that lasts. Book a free
              30-minute call and let&rsquo;s talk through it.
            </p>
            <CalButton size="lg" className="mt-6" label="Book a Discovery Call" />
          </div>
        </div>

        {/* Sticky TOC sidebar (desktop) */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents items={toc} />
          </div>
        </aside>
      </div>

      {/* Related articles */}
      <div className="mt-16 border-t border-border pt-12">
        <h2 className="font-display text-2xl font-medium tracking-tight text-foreground">
          Related articles
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </article>
  );
}
