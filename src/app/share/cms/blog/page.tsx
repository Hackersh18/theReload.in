import type { Metadata } from "next";
import { BlogPostsTable } from "@/components/cms/blog-posts-table";
import { CmsPageHeader } from "@/components/cms/cms-page-header";
import { requireCmsPage } from "@/lib/cms/guard";
import { getCmsPosts } from "@/lib/cms/store";

export const metadata: Metadata = {
  title: "Blog posts",
  robots: { index: false, follow: false },
};

export default async function CmsBlogPage() {
  await requireCmsPage();
  const posts = await getCmsPosts();

  return (
    <>
      <CmsPageHeader
        title="Blog posts"
        description="Create, edit, and publish posts. Changes appear on /blog immediately when running locally."
        action={{ href: "/share/cms/blog/new", label: "New post" }}
      />
      <BlogPostsTable posts={posts} />
    </>
  );
}
