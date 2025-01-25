import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_GNOSIS_BEACONCHAIN_URL: z.string().url(),
    NEXT_PUBLIC_MAINNET_BEACONCHAIN_URL: z.string().url(),
  },
  server: {
    GNOSIS_API_URL: z.string().url(),
    MAINNET_API_URL: z.string().url(),
    API_SECRET_KEY: z.string(),
  },
  runtimeEnv: {
    GNOSIS_API_URL: process.env.GNOSIS_API_URL,
    MAINNET_API_URL: process.env.MAINNET_API_URL,
    API_SECRET_KEY: process.env.API_SECRET_KEY,

    NEXT_PUBLIC_GNOSIS_BEACONCHAIN_URL: "https://gnosischa.in",
    NEXT_PUBLIC_MAINNET_BEACONCHAIN_URL: "https://beaconcha.in",
  },
  emptyStringAsUndefined: true,
});
