import { getLastSlotWithAttestations_db } from "@/src/beacon/getLastSlotWithAttestations";
import {
  getSlotNumberFromTimestamp,
  getSlotsPerEpoch,
} from "@/src/beacon/utils";
import { env } from "@/env";

import { PrismaClient } from "@prisma/client";

export async function getSlotInfo(
  chain: "gnosis" | "mainnet",
  prisma: PrismaClient
) {
  const lastSlotWithAttestations = await getLastSlotWithAttestations_db(prisma);
  const lastSlotProcessed = lastSlotWithAttestations?.slot || 0;

  // This should be equal to lastSlotProcessed, if lastSlotProcessed is behind
  // it means that the indexer is delayed.
  const headSlot = getSlotNumberFromTimestamp(chain, new Date().getTime());

  // attestations for slot n come at slot n + 1
  const indexerIdealHead =
    headSlot - 1 - env.NEXT_PUBLIC_BEACON_DELAY_SLOTS_TO_HEAD;

  // A validator can safely attest to a slot up to env.BEACON_MAX_ATTESTATION_DELAY slots after.
  // is the attestation comes after it, is considered missed.
  const maxSafeSlotToQuery =
    lastSlotProcessed - env.NEXT_PUBLIC_BEACON_MAX_ATTESTATION_DELAY;

  // is syncing if the indexer is 1 epoch behind
  const syncing =
    lastSlotProcessed < indexerIdealHead - getSlotsPerEpoch(chain);

  return {
    lastSlotProcessed,
    syncing,
    delay: indexerIdealHead - lastSlotProcessed,
    maxSafeSlotToQuery,
  };
}
