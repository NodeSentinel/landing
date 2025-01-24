import {
  getSlotNumberFromTimestamp,
  getSlotsIn1h,
  VALIDATOR_STATUS,
} from "@/src/beacon/utils";
import { Committee, PrismaClient } from "@prisma/client";

export async function getMissedAttestations(
  chain: "gnosis" | "mainnet",
  userId: number,
  prisma: PrismaClient
): Promise<Committee[]> {
  const maxSlotToQuery = getSlotNumberFromTimestamp(chain, Date.now());

  return prisma.$queryRaw<Committee[]>`
    WITH slots AS (
      SELECT ${
        maxSlotToQuery - getSlotsIn1h(chain)
      } as slot_start, ${maxSlotToQuery} as slot_end
    ),
    active_validators AS MATERIALIZED (
      SELECT v.id
      FROM "_UserToValidator" uv 
      JOIN "Validator" v ON v.id = uv."B"
      WHERE uv."A" = ${userId}
      AND v.status IN (${VALIDATOR_STATUS.active_ongoing}, ${
    VALIDATOR_STATUS.active_exiting
  })
    )
    SELECT c.* 
    FROM active_validators av
    CROSS JOIN slots s
    JOIN LATERAL (
      SELECT *
      FROM "Committee" c
      WHERE c."validatorIndex" = av.id
      AND c.slot BETWEEN s.slot_start AND s.slot_end
      AND (
        c."attestationDelay" IS NULL 
        OR c."attestationDelay" > ${Number(
          process.env.BEACON_MAX_ATTESTATION_DELAY
        )}
      )
    ) c ON true
    ORDER BY c.slot DESC
  `;
}
