import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: "/profile",
}