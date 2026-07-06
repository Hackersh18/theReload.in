import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CmsSetupForm } from "@/components/cms/cms-setup-form";
import { isCmsAuthConfigured } from "@/lib/cms/auth-store";
import { isCmsAuthenticated } from "@/lib/cms/access";

export const metadata: Metadata = {
  title: "CMS setup",
  robots: { index: false, follow: false },
};

export default async function CmsSetupPage() {
  if (await isCmsAuthenticated()) {
    redirect("/share/cms");
  }

  if (await isCmsAuthConfigured()) {
    redirect("/share/cms/login");
  }

  return <CmsSetupForm />;
}
