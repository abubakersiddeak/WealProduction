import { NextResponse } from "next/server";
import { verifyToken } from "./app/lib/auth"; // Reverted import

export async function middleware(request) {
  const { pathname, origin } = request.nextUrl;

  // 🔐 শুধু `/dashboard` রুটে authentication চেক করো
  if (
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/dashboard/expence")
  ) {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const decoded = await verifyToken(token);

    if (!decoded) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Attach user info to the request headers
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', decoded.id);
    requestHeaders.set('x-user-name', decoded.name);
    requestHeaders.set('x-user-role', decoded.role);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  // ✅ dashboard ছাড়া অন্য সব রুটে visitor track করো
  const ip = request.headers.get("x-forwarded-for") || "Unknown";
  const url = pathname;
  const userAgent = request.headers.get("user-agent") || "Unknown";

  try {
    await fetch(`${origin}/api/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ip, url, userAgent }),
    });
  } catch (err) {
    console.error("Visitor log fetch error:", err.message);
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard", "/dashboard/expence", "/"],
};
