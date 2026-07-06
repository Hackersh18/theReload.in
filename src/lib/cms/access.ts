import { cookies } from "next/headers";
import { isCmsAuthConfigured } from "@/lib/cms/auth-store";
import { isValidCmsSessionToken } from "@/lib/cms/session";

export const CMS_SESSION_COOKIE = "cms_session";

export async function getCmsSession(): Promise<string | undefined> {
  const jar = await cookies();
  return jar.get(CMS_SESSION_COOKIE)?.value;
}

export async function isCmsAuthenticated(): Promise<boolean> {
  if (!(await isCmsAuthConfigured())) return false;
  return await isValidCmsSessionToken(await getCmsSession());
}
