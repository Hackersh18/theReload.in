/** Shared secret for the unlisted client review page (`?access=...`). */
export function getReviewAccessToken(): string {
  return process.env.REVIEW_ACCESS_TOKEN?.trim() ?? "";
}

export function isValidReviewAccess(token: string | undefined | null): boolean {
  const expected = getReviewAccessToken();
  if (!expected) return true;
  return token === expected;
}
