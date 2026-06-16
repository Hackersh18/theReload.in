import { Icon } from "@/components/icons";
import { faqs } from "@/data/content";

/**
 * Accessible accordion built on native <details>/<summary> — keyboard operable
 * and works without JavaScript.
 */
export function Faq() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-[var(--radius-bento)] border border-border bg-surface p-5 transition-colors duration-300 hover:border-border-strong [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground">
            {faq.question}
            <Icon
              name="chevronDown"
              size={18}
              className="shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted transition-opacity duration-300">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
