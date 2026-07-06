"use client";

import Link from "next/link";
import { useActionState } from "react";
import { setupCmsAdmin, type CmsSetupState } from "@/app/share/cms/actions";
import { Logo } from "@/components/logo";
import { buttonClasses } from "@/components/ui";

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 transition-colors focus:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30";
const labelClass = "mb-1.5 block text-sm font-medium text-white/85";

const initialState: CmsSetupState = {};

export function CmsSetupForm() {
  const [state, action, pending] = useActionState(setupCmsAdmin, initialState);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-5 py-10 text-white">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <Logo />
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-accent/80">
            Reload CMS
          </p>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight">Create admin account</h1>
          <p className="mt-2 text-sm text-white/55">
            One-time setup. Credentials are stored locally in{" "}
            <span className="font-mono text-white/70">data/cms-auth.json</span> (not in env).
          </p>
        </div>

        <form action={action} className="mt-8 space-y-4">
          <div>
            <label className={labelClass} htmlFor="username">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              defaultValue="admin"
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              className={fieldClass}
              placeholder="At least 8 characters"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="confirm">
              Confirm password
            </label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              className={fieldClass}
            />
          </div>

          {state.error && (
            <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className={buttonClasses("primary", "md", "w-full disabled:opacity-60")}
          >
            {pending ? "Creating account…" : "Create admin & sign in"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-white/45">
          <Link href="/" className="font-semibold text-accent hover:text-accent-hover">
            Back to website
          </Link>
        </p>
      </div>
    </div>
  );
}
