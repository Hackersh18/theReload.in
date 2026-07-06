import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CmsLoginForm } from "@/components/cms/cms-login-form";
import { isCmsAuthConfigured } from "@/lib/cms/auth-store";
import { isCmsAuthenticated } from "@/lib/cms/access";

export const metadata: Metadata = {
  title: "Sign in",
  robots: { index: false, follow: false },
};

export default async function CmsLoginPage() {
  if (await isCmsAuthenticated()) {
    redirect("/share/cms");
  }

  if (!(await isCmsAuthConfigured())) {
    redirect("/share/cms/setup");
  }

  return <CmsLoginForm />;
}
