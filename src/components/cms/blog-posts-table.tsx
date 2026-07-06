"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Post } from "@/types";
import { Icon } from "@/components/icons";

export function BlogPostsTable({ posts }: { posts: Post[] }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState<string | null>(null);

  async function remove(slug: string) {
    if (!confirm("Delete this post? This cannot be undone.")) return;
    setDeleting(slug);
    try {
      const res = await fetch(`/api/cms/posts/${slug}`, { method: "DELETE" });
      if (!res.ok) return;
      router.refresh();
    } finally {
      setDeleting(null);
    }
  }

  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-12 text-center">
        <p className="text-sm text-white/55">No posts yet. Create your first one.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-white/10 bg-white/[0.03] text-xs font-bold uppercase tracking-wider text-white/45">
          <tr>
            <th className="px-4 py-3">Title</th>
            <th className="hidden px-4 py-3 sm:table-cell">Category</th>
            <th className="hidden px-4 py-3 md:table-cell">Date</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/8">
          {posts.map((post) => (
            <tr key={post.slug} className="hover:bg-white/[0.02]">
              <td className="px-4 py-3">
                <div className="font-semibold text-white">{post.title}</div>
                <div className="mt-0.5 text-xs text-white/45">
                  /blog/{post.slug}
                  {post.featured && (
                    <span className="ml-2 rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold uppercase text-accent">
                      Featured
                    </span>
                  )}
                </div>
              </td>
              <td className="hidden px-4 py-3 text-white/65 sm:table-cell">{post.category}</td>
              <td className="hidden px-4 py-3 text-white/65 md:table-cell">{post.date}</td>
              <td className="px-4 py-3">
                <div className="flex justify-end gap-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="rounded-lg p-2 text-white/50 hover:bg-white/5 hover:text-white"
                    title="Preview"
                  >
                    <Icon name="arrowUpRight" size={16} />
                  </Link>
                  <Link
                    href={`/share/cms/blog/${post.slug}`}
                    className="rounded-lg p-2 text-white/50 hover:bg-white/5 hover:text-white"
                    title="Edit"
                  >
                    <Icon name="penTool" size={16} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => remove(post.slug)}
                    disabled={deleting === post.slug}
                    className="rounded-lg p-2 text-white/50 hover:bg-red-500/10 hover:text-red-300 disabled:opacity-40"
                    title="Delete"
                  >
                    <Icon name="close" size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
