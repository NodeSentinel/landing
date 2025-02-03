import { env } from "@/env";

export const getBeaconExplorerValidatorUrl = (chain: string, id: number) => {
  return `${
    chain == "gnosis"
      ? env.NEXT_PUBLIC_GNOSIS_BEACONCHAIN_URL
      : env.NEXT_PUBLIC_MAINNET_BEACONCHAIN_URL
  }/validator/${id}`;
};
