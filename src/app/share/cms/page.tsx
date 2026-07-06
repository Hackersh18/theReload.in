import type { Metadata } from "next";
import Link from "next/link";
import { CmsPageHeader } from "@/components/cms/cms-page-header";
import { Icon } from "@/components/icons";
import { requireCmsPage } from "@/lib/cms/guard";
import { getCmsPosts, getCmsReviews, getCmsTestimonials } from "@/lib/cms/store";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

const cards = [
  { href: "/share/cms/blog", label: "Blog posts", key: "posts" as const, icon: "penTool" as const },
  { href: "/share/cms/reviews", label: "Client reviews", key: "reviews" as const, icon: "messageCircle" as const },
];

export default async function CmsDashboardPage() {
  await requireCmsPage();

  const [posts, reviews, published] = await Promise.all([
    getCmsPosts(),
    getCmsReviews(),
    getCmsTestimonials(),
  ]);

  const counts = {
    posts: posts.length,
    reviews: reviews.length + published.length,
  };

  return (
    <>
      <CmsPageHeader
        title="Dashboard"
        description="Manage blog posts and client reviews for Reload."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent/40 hover:bg-white/[0.05]"
          >
            <div className="flex items-center justify-between">
              <Icon name={card.icon} size={22} className="text-accent" />
              <span className="text-3xl font-extrabold text-white">{counts[card.key]}</span>
            </div>
            <p className="mt-4 text-sm font-semibold text-white">{card.label}</p>
            <p className="mt-1 text-xs text-white/45 group-hover:text-white/60">Open →</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm text-white/55">
        <p className="font-semibold text-white/80">Deploy note</p>
        <p className="mt-2 leading-relaxed">
          Changes are saved to JSON files in <span className="font-mono text-white/70">data/cms/</span>.
          On Vercel, commit and redeploy for edits to go live — or run locally with{" "}
          <span className="font-mono text-white/70">npm run dev</span>.
        </p>
      </div>
    </>
  );
}
