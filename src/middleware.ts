import { env } from "@/env";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Configurar las rutas que queremos proteger
export const config = {
  matcher: "/api/:path*",
};

export function middleware(request: NextRequest) {
  // Get the origin and referer
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  // In development, allow localhost
  const isDevelopment =
    (process.env.NODE_ENV || "development") === "development";
  const allowedOrigin = env.NEXT_PUBLIC_APP_URL;

  // Check if the request is coming from an allowed origin
  if (!isDevelopment && origin) {
    const isAllowedOrigin = origin === allowedOrigin;
    if (!isAllowedOrigin) {
      return NextResponse.json(
        { error: "Unauthorized origin" },
        { status: 403 }
      );
    }
  }

  // If no origin header (direct API call), check referer
  if (!isDevelopment && !origin && referer) {
    const refererUrl = new URL(referer);
    const isAllowedReferer = refererUrl.origin === allowedOrigin;
    if (!isAllowedReferer) {
      return NextResponse.json(
        { error: "Unauthorized referer" },
        { status: 403 }
      );
    }
  }

  // Get the response
  const response = NextResponse.next();

  // Add the CORS headers
  response.headers.set(
    "Access-Control-Allow-Origin",
    isDevelopment ? "*" : allowedOrigin!
  );
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
}
