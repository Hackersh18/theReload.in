import type { Metadata } from "next";
import { headers } from "next/headers";
import { CmsPageHeader } from "@/components/cms/cms-page-header";
import { ReviewShareCard } from "@/components/cms/review-share-card";
import { ReviewsPanel } from "@/components/cms/reviews-panel";
import { requireCmsPage } from "@/lib/cms/guard";
import { getCmsReviews, getCmsTestimonials } from "@/lib/cms/store";
import { getClientReviewShareUrl } from "@/lib/share-urls";

export const metadata: Metadata = {
  title: "Client reviews",
  robots: { index: false, follow: false },
};

async function getRequestOrigin(): Promise<string> {
  const headersList = await headers();
  const host = headersList.get("x-forwarded-host") ?? headersList.get("host");
  if (!host) return getClientReviewShareUrl();
  const proto = headersList.get("x-forwarded-proto") ?? "http";
  return getClientReviewShareUrl(`${proto}://${host}`);
}

export default async function CmsReviewsPage() {
  await requireCmsPage();
  const [reviews, published, reviewShareUrl] = await Promise.all([
    getCmsReviews(),
    getCmsTestimonials(),
    getRequestOrigin(),
  ]);

  return (
    <>
      <CmsPageHeader
        title="Client reviews"
        description="Collect feedback via the private link, then publish approved reviews to the homepage."
      />
      <ReviewShareCard shareUrl={reviewShareUrl} />
      <ReviewsPanel reviews={reviews} published={published} />
    </>
  );
}
