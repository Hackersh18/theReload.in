import { siteConfig } from "@/data/site";
import { getBlogAccessToken } from "@/lib/blog-access";
import { getReviewAccessToken } from "@/lib/review-access";

/** Private client review form — `/share/client-review?access=...` */
export function getClientReviewSharePath(): string {
  const token = getReviewAccessToken();
  if (!token) return "/share/client-review";
  return `/share/client-review?access=${encodeURIComponent(token)}`;
}

/** Full URL for sharing the client review form (pass origin in dev, e.g. http://localhost:3000). */
export function getClientReviewShareUrl(origin: string = siteConfig.url): string {
  const base = origin.replace(/\/$/, "");
  return `${base}${getClientReviewSharePath()}`;
}

/** Private blog draft form — `/share/add-blog?access=...` */
export function getBlogDraftSharePath(): string {
  const token = getBlogAccessToken();
  if (!token) return "/share/add-blog";
  return `/share/add-blog?access=${encodeURIComponent(token)}`;
}
