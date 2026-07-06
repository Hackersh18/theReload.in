import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CmsPageHeader } from "@/components/cms/cms-page-header";
import { PostEditor } from "@/components/cms/post-editor";
import { requireCmsPage } from "@/lib/cms/guard";
import { getCmsPosts } from "@/lib/cms/store";

export const metadata: Metadata = {
  title: "Edit post",
  robots: { index: false, follow: false },
};

export default async function CmsEditPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await requireCmsPage();
  const { slug } = await params;
  const post = (await getCmsPosts()).find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <CmsPageHeader title="Edit post" description={`Editing /blog/${post.slug}`} />
      <PostEditor mode="edit" initial={post} />
    </>
  );
}
