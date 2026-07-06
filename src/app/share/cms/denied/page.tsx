import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "Access denied",
  robots: { index: false, follow: false },
};

export default function CmsDeniedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-5 text-center text-white">
      <Logo />
      <h1 className="mt-8 text-2xl font-extrabold tracking-tight">Access denied</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55">
        Your CMS session is invalid or has expired. Sign in again to continue.
      </p>
      <Link
        href="/share/cms/login"
        className="mt-8 text-sm font-semibold text-accent hover:text-accent-hover"
      >
        Sign in
      </Link>
    </div>
  );
}
