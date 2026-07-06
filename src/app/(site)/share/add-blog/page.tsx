import type { Metadata } from "next";
import Link from "next/link";
import { BlogDraftForm } from "@/components/blog-draft-form";
import { Logo } from "@/components/logo";
import { isValidBlogAccess } from "@/lib/blog-access";

export const metadata: Metadata = {
  title: "Add blog post",
  description: "Private blog draft form for Reload.",
  robots: { index: false, follow: false },
};

export default async function AddBlogPage({
  searchParams,
}: {
  searchParams: Promise<{ access?: string }>;
}) {
  const { access } = await searchParams;

  if (!isValidBlogAccess(access)) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-5 pb-20 pt-page-hero text-center sm:px-6">
        <Logo className="opacity-80" />
        <h1 className="mt-8 text-2xl font-extrabold tracking-tight text-foreground">
          This link isn&apos;t valid
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Blog drafts can only be added through a direct invite link. Use the full
          URL you received — it should include an access key.
        </p>
        <Link
          href="/"
          className="mt-8 text-sm font-semibold text-accent hover:text-accent-hover"
        >
          Back to Reload
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-5 pb-16 pt-page-hero sm:px-6 sm:pb-20">
      <div className="mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
          Private blog editor
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Add a blog post
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted">
          This page isn&apos;t listed on the site. Drafts are saved to{" "}
          <span className="font-mono text-foreground">data/blog-drafts.json</span> — copy
          the post into <span className="font-mono text-foreground">src/data/posts.ts</span>{" "}
          to publish.
        </p>
      </div>

      <BlogDraftForm accessToken={access} />
    </div>
  );
}
