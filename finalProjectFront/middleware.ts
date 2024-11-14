import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get("token")?.value;

  const isProtectedRoute =
    pathname.startsWith("/admin") || pathname === "/updateprofile";

  const isPublicRoute = pathname === "/login" || pathname === "/register";

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (token && isPublicRoute) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/updateprofile", "/login", "/register"],
};
