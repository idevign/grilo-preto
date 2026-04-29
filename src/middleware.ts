import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip Next.js internals and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const host = request.headers.get("host") ?? "";
  const siteHeader = request.headers.get("x-site");

  const isRmp =
    siteHeader === "rmp" ||
    process.env.SITE === "rmp" ||
    host.startsWith("rmp.");

  if (isRmp && !pathname.startsWith("/rmp")) {
    const url = request.nextUrl.clone();
    url.pathname = `/rmp${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
