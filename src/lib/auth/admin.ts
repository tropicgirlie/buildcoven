const COOKIE_NAME = "bc_admin";

export function getAdminSecret(): string | undefined {
  return process.env.ADMIN_SECRET;
}

export async function hashAdminSecret(secret: string): Promise<string> {
  const data = new TextEncoder().encode(`build-coven:${secret}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function getExpectedAdminCookie(): Promise<string | null> {
  const secret = getAdminSecret();
  if (!secret) return null;
  return hashAdminSecret(secret);
}

export async function verifyAdminCookie(
  cookieValue: string | undefined,
): Promise<boolean> {
  const expected = await getExpectedAdminCookie();
  if (!expected || !cookieValue) return false;
  return cookieValue === expected;
}

export async function verifyAdminRequest(request: Request): Promise<boolean> {
  const secret = getAdminSecret();
  if (!secret) return true;

  const auth = request.headers.get("authorization");
  if (auth === `Bearer ${secret}`) return true;

  const cookieHeader = request.headers.get("cookie") ?? "";
  const match = cookieHeader.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  return verifyAdminCookie(match?.[1]);
}

export { COOKIE_NAME };
