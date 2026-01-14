import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { ROLES } from "@/utils/roleUtils";

export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = req.nextUrl;

  // 🚫 Non-authenticaded tring enter on /dashboard or /admin
  if (!token && (pathname.startsWith("/dashboard") || pathname.startsWith("/admin"))) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // 🔐 Authenticated Non-admin user enter in /admin
  if (pathname.startsWith("/admin") && token?.role !== ROLES.ADMIN) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
