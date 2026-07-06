import type { Metadata } from "next";
import Link from "next/link";
import { ReviewForm } from "@/components/review-form";
import { Logo } from "@/components/logo";
import { isValidReviewAccess } from "@/lib/review-access";

export const metadata: Metadata = {
  title: "Client review",
  description: "Private client review form for Reload.",
  robots: { index: false, follow: false },
};

export default async function ClientReviewPage({
  searchParams,
}: {
  searchParams: Promise<{ access?: string }>;
}) {
  const { access } = await searchParams;

  if (!isValidReviewAccess(access)) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-5 pb-20 pt-page-hero text-center sm:px-6">
        <Logo className="opacity-80" />
        <h1 className="mt-8 text-2xl font-extrabold tracking-tight text-foreground">
          This link isn&apos;t valid
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Client reviews are only available through a direct invite link. If you
          were asked to leave feedback, use the full URL you received — it may
          include an access key.
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
    <div className="mx-auto max-w-2xl px-5 pb-16 pt-page-hero sm:px-6 sm:pb-20">
      <div className="mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
          Private client feedback
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Share your experience
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          This page isn&apos;t listed on our site. Only people with this direct
          link can submit a review. Thank you for working with Reload.
        </p>
      </div>

      <ReviewForm accessToken={access} />
    </div>
  );
}
