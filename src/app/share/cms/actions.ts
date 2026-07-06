"use server";

import { redirect } from "next/navigation";
import {
  createCmsAuthConfig,
  isCmsAuthConfigured,
  verifyCmsCredentials,
} from "@/lib/cms/auth-store";
import {
  clearCmsSessionCookie,
  createCmsSessionToken,
  setCmsSessionCookie,
} from "@/lib/cms/session";

export type CmsLoginState = { error?: string };
export type CmsSetupState = { error?: string };

export async function loginCms(
  _prev: CmsLoginState,
  formData: FormData,
): Promise<CmsLoginState> {
  const username = String(formData.get("username") ?? "");
  const password = String(formData.get("password") ?? "");

  if (!(await verifyCmsCredentials(username, password))) {
    return { error: "Invalid username or password." };
  }

  const token = await createCmsSessionToken();
  if (!token) {
    return { error: "CMS is not configured yet. Complete setup first." };
  }

  await setCmsSessionCookie(token);
  redirect("/share/cms");
}

export async function setupCmsAdmin(
  _prev: CmsSetupState,
  formData: FormData,
): Promise<CmsSetupState> {
  if (await isCmsAuthConfigured()) {
    redirect("/share/cms/login");
  }

  const username = String(formData.get("username") ?? "");
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirm") ?? "");

  if (password !== confirm) {
    return { error: "Passwords do not match." };
  }

  try {
    await createCmsAuthConfig(username, password);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not save admin account.";
    return { error: message };
  }

  const token = await createCmsSessionToken();
  if (token) await setCmsSessionCookie(token);
  redirect("/share/cms");
}

export async function clearCmsSession() {
  await clearCmsSessionCookie();
  redirect("/share/cms/login");
}
