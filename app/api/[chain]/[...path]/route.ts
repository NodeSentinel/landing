import { env } from "@/env";
import { NextRequest, NextResponse } from "next/server";

// Type guard para validar el chain
function isValidChain(chain: string): chain is "gnosis" | "mainnet" {
  return chain === "gnosis" || chain === "mainnet";
}

export async function GET(
  request: NextRequest,
  { params }: { params: { chain: string; path: string[] } }
) {
  try {
    const { chain, path } = params;

    // Validate chain
    if (!isValidChain(chain)) {
      return NextResponse.json(
        { error: "Invalid chain parameter" },
        { status: 400 }
      );
    }

    // Reconstruct the API path
    const apiPath = path.join("/");

    // Get the search params from the request
    const searchParams = request.nextUrl.searchParams;

    // Determine which API URL to use based on chain
    const apiBaseUrl =
      chain === "gnosis" ? env.GNOSIS_API_URL : env.MAINNET_API_URL;

    // Construct the full URL with search params
    const url = new URL(`${apiBaseUrl}/api/${apiPath}`);
    searchParams.forEach((value, key) => {
      url.searchParams.append(key, value);
    });

    console.log(">>> Forwarding request to:", url.toString());

    // Forward the request to the appropriate backend
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${env.API_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API proxy error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
