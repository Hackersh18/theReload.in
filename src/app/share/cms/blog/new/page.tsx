import type { Metadata } from "next";
import { CmsPageHeader } from "@/components/cms/cms-page-header";
import { PostEditor } from "@/components/cms/post-editor";
import { requireCmsPage } from "@/lib/cms/guard";

export const metadata: Metadata = {
  title: "New post",
  robots: { index: false, follow: false },
};

export default async function CmsNewPostPage() {
  await requireCmsPage();

  return (
    <>
      <CmsPageHeader
        title="New blog post"
        description="Fill in the details below. The slug is generated from the title."
      />
      <PostEditor mode="create" />
    </>
  );
}
