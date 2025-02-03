import { env } from "@/env";

export function shortenAddress(address: string): string {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export const getBeaconExplorerValidatorUrl = (chain: string, id: number) => {
  return `${
    chain == "gnosis"
      ? env.NEXT_PUBLIC_GNOSIS_BEACONCHAIN_URL
      : env.NEXT_PUBLIC_MAINNET_BEACONCHAIN_URL
  }/validator/${id}`;
};

export const getBeaconMaxAttestationDelay = (chain: string) => {
  return chain == "gnosis"
    ? env.NEXT_PUBLIC_GNOSIS_BEACON_MAX_ATTESTATION_DELAY
    : env.NEXT_PUBLIC_MAINNET_BEACON_MAX_ATTESTATION_DELAY;
};
