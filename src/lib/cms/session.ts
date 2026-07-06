import { createHmac, randomBytes, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { CMS_SESSION_COOKIE } from "@/lib/cms/access";
import { getCmsSessionSecret } from "@/lib/cms/auth-store";

const SESSION_MAX_AGE = 60 * 60 * 24 * 14;

const sessionOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: SESSION_MAX_AGE,
};

export async function createCmsSessionToken(): Promise<string | null> {
  const secret = await getCmsSessionSecret();
  if (!secret) return null;

  const exp = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE;
  const nonce = randomBytes(16).toString("hex");
  const payload = `${exp}.${nonce}`;
  const sig = createHmac("sha256", secret).update(payload).digest("hex");
  return `${payload}.${sig}`;
}

export async function isValidCmsSessionToken(
  token: string | undefined | null,
): Promise<boolean> {
  if (!token) return false;

  const secret = await getCmsSessionSecret();
  if (!secret) return false;

  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [expStr, nonce, sig] = parts;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || exp < Math.floor(Date.now() / 1000)) return false;

  const payload = `${expStr}.${nonce}`;
  const expected = createHmac("sha256", secret).update(payload).digest("hex");

  try {
    return timingSafeEqual(Buffer.from(sig, "hex"), Buffer.from(expected, "hex"));
  } catch {
    return false;
  }
}

export async function setCmsSessionCookie(token: string): Promise<void> {
  const jar = await cookies();
  jar.set(CMS_SESSION_COOKIE, token, sessionOptions);
}

export async function clearCmsSessionCookie(): Promise<void> {
  const jar = await cookies();
  jar.delete(CMS_SESSION_COOKIE);
}
