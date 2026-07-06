import { redirect } from "next/navigation";
import { isCmsAuthConfigured } from "@/lib/cms/auth-store";
import { isCmsAuthenticated } from "@/lib/cms/access";

export async function requireCmsPage() {
  if (!(await isCmsAuthConfigured())) {
    redirect("/share/cms/setup");
  }
  if (!(await isCmsAuthenticated())) {
    redirect("/share/cms/login");
  }
}
