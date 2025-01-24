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

  // Handle preflight requests
  if (request.method === "OPTIONS") {
    const response = new NextResponse(null, { status: 204 });
    response.headers.set(
      "Access-Control-Allow-Origin",
      env.BLOCK_API ? allowedOrigin : "*"
    );
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
  }

  // If API blocking is enabled, verify the request source
  if (env.BLOCK_API) {
    // For API routes, strictly enforce origin checking
    if (!origin && !referer) {
      return NextResponse.json(
        { error: "Missing origin or referer" },
        { status: 403 }
      );
    }

    const requestOrigin = origin || (referer ? new URL(referer).origin : null);

    if (requestOrigin !== allowedOrigin) {
      return NextResponse.json(
        { error: "Unauthorized request origin" },
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
