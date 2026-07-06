/** Shared secret for the unlisted blog draft page (`?access=...`). */
export function getBlogAccessToken(): string {
  return process.env.BLOG_ACCESS_TOKEN?.trim() ?? "";
}

export function isValidBlogAccess(token: string | undefined | null): boolean {
  const expected = getBlogAccessToken();
  if (!expected) return true;
  return token === expected;
}
