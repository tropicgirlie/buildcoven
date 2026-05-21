import { NextResponse } from "next/server";
import { getAdminSecret, hashAdminSecret, COOKIE_NAME } from "@/lib/auth/admin";

export async function POST(request: Request) {
  const secret = getAdminSecret();
  if (!secret) {
    return NextResponse.json(
      { error: "Admin auth is not configured" },
      { status: 503 },
    );
  }

  const body = (await request.json()) as { password?: string };
  const password = String(body.password ?? "");

  if (password !== secret) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const cookieValue = await hashAdminSecret(secret);
  const isProduction = process.env.NODE_ENV === "production";

  const response = NextResponse.json({ success: true });
  response.cookies.set(COOKIE_NAME, cookieValue, {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
