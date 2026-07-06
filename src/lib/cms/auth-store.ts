import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { randomBytes, scrypt, timingSafeEqual } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

const AUTH_FILE = path.join(process.cwd(), "data", "cms-auth.json");

export interface CmsAuthConfig {
  username: string;
  passwordSalt: string;
  passwordHash: string;
  sessionSecret: string;
}

async function readAuthFile(): Promise<CmsAuthConfig | null> {
  try {
    const raw = await readFile(AUTH_FILE, "utf8");
    const parsed = JSON.parse(raw) as CmsAuthConfig;
    if (
      !parsed.username ||
      !parsed.passwordSalt ||
      !parsed.passwordHash ||
      !parsed.sessionSecret
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export async function isCmsAuthConfigured(): Promise<boolean> {
  return (await readAuthFile()) !== null;
}

export async function getCmsAuthConfig(): Promise<CmsAuthConfig | null> {
  return readAuthFile();
}

export async function getCmsSessionSecret(): Promise<string | null> {
  const config = await readAuthFile();
  return config?.sessionSecret ?? null;
}

async function hashPassword(password: string, salt: Buffer): Promise<Buffer> {
  return (await scryptAsync(password, salt, 64)) as Buffer;
}

export async function createCmsAuthConfig(
  username: string,
  password: string,
): Promise<void> {
  if (await isCmsAuthConfigured()) {
    throw new Error("CMS auth is already configured.");
  }

  const trimmedUser = username.trim();
  if (!trimmedUser || password.length < 8) {
    throw new Error("Username required and password must be at least 8 characters.");
  }

  const salt = randomBytes(16);
  const hash = await hashPassword(password, salt);
  const config: CmsAuthConfig = {
    username: trimmedUser,
    passwordSalt: salt.toString("hex"),
    passwordHash: hash.toString("hex"),
    sessionSecret: randomBytes(32).toString("hex"),
  };

  await mkdir(path.dirname(AUTH_FILE), { recursive: true });
  await writeFile(AUTH_FILE, JSON.stringify(config, null, 2), "utf8");
}

export async function verifyCmsCredentials(
  username: string,
  password: string,
): Promise<boolean> {
  const config = await readAuthFile();
  if (!config) return false;

  const user = username.trim();
  if (user !== config.username) return false;

  const salt = Buffer.from(config.passwordSalt, "hex");
  const expected = Buffer.from(config.passwordHash, "hex");
  const actual = await hashPassword(password, salt);

  try {
    return timingSafeEqual(actual, expected);
  } catch {
    return false;
  }
}
