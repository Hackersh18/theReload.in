import Link from "next/link";
import { buttonClasses } from "@/components/ui";
import { Icon } from "@/components/icons";

export function CmsPageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/55">
            {description}
          </p>
        )}
      </div>
      {action && (
        <Link href={action.href} className={buttonClasses("primary", "md")}>
          <Icon name="plus" size={18} />
          {action.label}
        </Link>
      )}
    </div>
  );
}
