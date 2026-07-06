import type { Metadata } from "next";
import { CmsShell } from "@/components/cms/cms-shell";
import { isCmsAuthenticated } from "@/lib/cms/access";

export const metadata: Metadata = {
  title: "CMS",
  robots: { index: false, follow: false },
};

export default async function CmsLayout({ children }: { children: React.ReactNode }) {
  const authed = await isCmsAuthenticated();
  if (authed) return <CmsShell>{children}</CmsShell>;
  return <>{children}</>;
}
