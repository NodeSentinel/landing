import { env } from "@/env";
import { NextRequest, NextResponse } from "next/server";

// Type guard para validar el chain
function isValidChain(chain: string): chain is "gnosis" | "ethereum" {
  return chain === "gnosis" || chain === "ethereum";
}

export async function GET(
  request: NextRequest,
  { params }: { params: { chain: string; path: string[] } }
) {
  try {
    const { chain, path } = params;
    console.log("[DEBUG] Request params:", { chain, path });

    // Validate chain
    if (!isValidChain(chain)) {
      console.log("[DEBUG] Invalid chain:", chain);
      return NextResponse.json(
        { error: "Invalid chain parameter" },
        { status: 400 }
      );
    }

    // Reconstruct the API path
    const apiPath = path.join("/");
    console.log("[DEBUG] API Path:", apiPath);

    // Get the search params from the request
    const searchParams = request.nextUrl.searchParams;
    console.log("[DEBUG] Search params:", Object.fromEntries(searchParams));

    // Determine which API URL to use based on chain
    const apiBaseUrl =
      chain === "gnosis" ? env.GNOSIS_API_URL : env.MAINNET_API_URL;
    console.log("[DEBUG] Using API Base URL:", apiBaseUrl);

    // Construct the full URL with search params
    const url = new URL(`${apiBaseUrl}/api/${apiPath}`);
    searchParams.forEach((value, key) => {
      url.searchParams.append(key, value);
    });

    console.log("[DEBUG] Full request URL:", url.toString());
    console.log("[DEBUG] Request headers:", {
      Authorization: "Bearer [REDACTED]",
      "Content-Type": "application/json",
    });

    // Forward the request to the appropriate backend
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${env.API_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    });

    console.log("[DEBUG] Response status:", response.status);
    console.log(
      "[DEBUG] Response headers:",
      Object.fromEntries(response.headers)
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[DEBUG] Error response body:", errorText);
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("[DEBUG] Response data:", JSON.stringify(data, null, 2));
    return NextResponse.json(data);
  } catch (error) {
    console.error("[DEBUG] Detailed error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
