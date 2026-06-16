import Link from "next/link";
import type { Post } from "@/types";
import { Tag } from "@/components/ui";
import { Icon } from "@/components/icons";
import { formatDate, cn } from "@/lib/utils";

export function PostCard({
  post,
  className,
}: {
  post: Post;
  className?: string;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-[var(--radius-bento)] border border-border bg-surface p-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-border-strong hover:shadow-[0_16px_48px_-14px_rgba(0,0,0,0.18)]",
        className,
      )}
    >
      <div className="flex items-center gap-3 text-xs text-muted">
        <Tag>{post.category}</Tag>
        <span>{post.readTime} min read</span>
      </div>
      <h3 className="mt-4 font-display text-xl font-medium leading-snug tracking-tight text-foreground">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
        {post.excerpt}
      </p>
      <div className="mt-auto flex items-center justify-between pt-5">
        <time dateTime={post.date} className="text-xs text-muted">
          {formatDate(post.date)}
        </time>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
          Read more
          <Icon
            name="arrowRight"
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
