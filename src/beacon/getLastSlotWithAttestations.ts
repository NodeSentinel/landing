import { PrismaClient } from "@prisma/client";

export function getLastSlotWithAttestations_db(prisma: PrismaClient) {
  return prisma.slot.findFirst({
    where: { attestationsFetched: true },
    orderBy: { slot: "desc" },
  });
}
