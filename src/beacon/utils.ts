import { env } from "@/env";

export const VALIDATOR_STATUS = {
  pending_initialized: 0,
  pending_queued: 1,
  active_ongoing: 2,
  active_exiting: 3,
  active_slashed: 4,
  exited_unslashed: 5,
  exited_slashed: 6,
  withdrawal_possible: 7,
  withdrawal_done: 8,
} as const;

/**
 * Given a timestamp, determine the slot number.
 * @param timestamp - The timestamp in milliseconds.
 * @returns The corresponding slot number.
 */
export function getSlotNumberFromTimestamp(
  chain: "gnosis" | "mainnet",
  timestamp: number
): number {
  const genesisTimestamp =
    chain === "gnosis"
      ? env.NEXT_PUBLIC_GNOSIS_BEACON_GENESIS_TIMESTAMP
      : env.NEXT_PUBLIC_MAINNET_BEACON_GENESIS_TIMESTAMP;

  const slotDuration =
    chain === "gnosis"
      ? env.NEXT_PUBLIC_GNOSIS_BEACON_SLOT_DURATION_IN_SECONDS
      : env.NEXT_PUBLIC_MAINNET_BEACON_SLOT_DURATION_IN_SECONDS;

  return Math.floor((timestamp - genesisTimestamp) / slotDuration);
}

export const getSlotsIn1h = (chain: "gnosis" | "mainnet") => {
  return chain === "gnosis"
    ? 3600 / env.NEXT_PUBLIC_GNOSIS_BEACON_SLOT_DURATION_IN_SECONDS
    : 3600 / env.NEXT_PUBLIC_MAINNET_BEACON_SLOT_DURATION_IN_SECONDS;
};

export const getEpochFromSlot = (chain: "gnosis" | "mainnet", slot: number) => {
  return chain === "gnosis"
    ? Math.floor(slot / env.NEXT_PUBLIC_GNOSIS_BEACON_SLOT_PER_EPOCH)
    : Math.floor(slot / env.NEXT_PUBLIC_MAINNET_BEACON_SLOT_PER_EPOCH);
};

export const getSlotsPerEpoch = (chain: "gnosis" | "mainnet") => {
  return chain === "gnosis"
    ? env.NEXT_PUBLIC_GNOSIS_BEACON_SLOT_PER_EPOCH
    : env.NEXT_PUBLIC_MAINNET_BEACON_SLOT_PER_EPOCH;
};
