import { env } from "@/env";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Configurar las rutas que queremos proteger
export const config = {
  matcher: "/api/:path*",
};

export function middleware(request: NextRequest) {
  // Verify that the request has a valid Vercel-Proxy-Signature header
  // This header is automatically added by Vercel's Edge Network
  const isVercelProxyRequest = request.headers.get("x-vercel-proxy-signature");

  if (env.BLOCK_API && !isVercelProxyRequest) {
    return NextResponse.json(
      { error: "Direct API access is not allowed" },
      { status: 403 }
    );
  }

  const origin = request.headers.get("origin");
  const allowedOrigin = env.NEXT_PUBLIC_APP_URL;

  // Handle preflight requests
  if (request.method === "OPTIONS") {
    const headers = {
      "Access-Control-Allow-Origin": env.BLOCK_API ? allowedOrigin : "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400", // 24 hours
    };
    return new NextResponse(null, { status: 204, headers });
  }

  // Handle actual requests
  if (env.BLOCK_API) {
    const referer = request.headers.get("referer");

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

  // Continue with the request
  const response = NextResponse.next();

  // Add CORS headers to the response
  response.headers.set(
    "Access-Control-Allow-Origin",
    env.BLOCK_API ? allowedOrigin : "*"
  );
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
}
