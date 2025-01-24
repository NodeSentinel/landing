import { env } from "@/env";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Configurar las rutas que queremos proteger
export const config = {
  matcher: "/api/:path*",
};

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const allowedOrigin = env.NEXT_PUBLIC_APP_URL;

  // If API blocking is enabled, verify the request source
  if (env.BLOCK_API) {
    // Check origin first
    if (origin) {
      if (origin !== allowedOrigin) {
        return NextResponse.json(
          { error: "Unauthorized origin" },
          { status: 403 }
        );
      }
    }
    // If no origin, check referer
    else if (referer) {
      const refererUrl = new URL(referer);
      if (refererUrl.origin !== allowedOrigin) {
        return NextResponse.json(
          { error: "Unauthorized referer" },
          { status: 403 }
        );
      }
    }
    // If neither origin nor referer exist, block the request
    else {
      return NextResponse.json(
        { error: "Missing origin or referer" },
        { status: 403 }
      );
    }
  }

  const response = NextResponse.next();

  // Add CORS headers
  response.headers.set(
    "Access-Control-Allow-Origin",
    env.BLOCK_API ? allowedOrigin : "*"
  );
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
}
