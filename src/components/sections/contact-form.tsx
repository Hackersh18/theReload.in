"use client";

import { useState } from "react";
import { CalButton, buttonClasses } from "@/components/ui";
import { Icon } from "@/components/icons";

const projectTypes = ["Web App", "Design", "SaaS", "Consulting", "Other"];
const budgetRanges = ["< $5K", "$5K – $15K", "$15K – $50K", "$50K+"];

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/70 transition-colors focus:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40";
const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  // No backend in this build — we simulate a successful submission client-side.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 rounded-[var(--radius-bento)] border border-border bg-surface p-8 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-accent-subtle text-accent">
          <Icon name="check" size={26} />
        </span>
        <h3 className="text-2xl font-extrabold tracking-tight text-foreground">
          Message sent
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Thanks for reaching out. We&rsquo;ll get back to you within one
          business day. Prefer to skip the wait?
        </p>
        <CalButton size="md" />
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[var(--radius-bento)] border border-border bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Jane Doe"
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="jane@company.com"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="company">
            Company <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company Inc."
            className={fieldClass}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="projectType">
              Project type
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                Select one
              </option>
              {projectTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="budget">
              Budget range
            </label>
            <select
              id="budget"
              name="budget"
              required
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                Select one
              </option>
              {budgetRanges.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us what you're building and what success looks like."
            className={`${fieldClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          className={buttonClasses("outline", "lg", "w-full sm:w-auto")}
        >
          Send message
          <Icon name="arrowRight" size={16} />
        </button>
      </div>
    </form>
  );
}
