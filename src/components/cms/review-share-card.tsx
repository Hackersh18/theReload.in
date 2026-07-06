"use client";

import { useState } from "react";
import { buttonClasses } from "@/components/ui";
import { Icon } from "@/components/icons";

export function ReviewShareCard({ shareUrl }: { shareUrl: string }) {
  const [copied, setCopied] = useState(false);
  const tokenConfigured = shareUrl.includes("access=");

  async function copy() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this client review link:", shareUrl);
    }
  }

  return (
    <div className="mb-8 rounded-2xl border border-accent/25 bg-accent/5 p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-white">Client review link</p>
          <p className="mt-1 max-w-xl text-sm text-white/55">
            Share this private URL with clients so they can submit feedback. Publish approved
            reviews to the homepage from the list below.
          </p>
          {!tokenConfigured && (
            <p className="mt-2 text-xs text-amber-300">
              Set <span className="font-mono">REVIEW_ACCESS_TOKEN</span> in{" "}
              <span className="font-mono">.env.local</span> to secure the form.
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={copy}
          className={buttonClasses("primary", "sm")}
        >
          <Icon name={copied ? "check" : "mail"} size={16} />
          {copied ? "Copied" : "Copy link"}
        </button>
      </div>
      <p className="mt-4 break-all rounded-xl border border-white/10 bg-black/30 px-3 py-2 font-mono text-xs text-white/70">
        {shareUrl}
      </p>
      <a
        href={shareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover"
      >
        Open review form
        <Icon name="arrowUpRight" size={14} />
      </a>
    </div>
  );
}
