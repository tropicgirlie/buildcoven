import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  COOKIE_NAME,
  getAdminSecret,
  getExpectedAdminCookie,
  verifyAdminCookie,
} from "@/lib/auth/admin";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const secret = await getAdminSecret();

  if (!secret) return NextResponse.next();

  const isLoginPage = pathname === "/admin/login";
  const isLoginApi = pathname === "/api/admin/login";
  const isLogoutApi = pathname === "/api/admin/logout";
  const isProtectedPage = pathname.startsWith("/admin") && !isLoginPage;
  const isProtectedApi =
    pathname.startsWith("/api/applications") && !isLogoutApi;

  if (isLoginApi || isLogoutApi) return NextResponse.next();

  const cookieValue = request.cookies.get(COOKIE_NAME)?.value;
  const isAuthed = await verifyAdminCookie(cookieValue);

  if (isProtectedPage || isProtectedApi) {
    if (!isAuthed) {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (isLoginPage && isAuthed) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/applications/:path*", "/api/admin/:path*"],
};
