import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getMissedAttestations } from "@/src/beacon/getMissedAttestations";
import { getValidatorStatuses } from "@/src/beacon/getValidatorStatuses";
import { getEpochFromSlot } from "@/src/beacon/utils";
import { getSlotInfo } from "@/src/beacon/getSlotInfo";

export async function GET(
  _request: Request,
  { params }: { params: { chain: string; loginId: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        loginId: params.loginId,
      },
      select: {
        id: true,
        username: true,
        loginId: true,
        inactiveOnMissedAttestations: true,
        validators: {
          select: {
            withdrawalAddress: true,
            id: true,
            balance: true,
            status: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const missedAttestations = await getMissedAttestations(
      params.chain as "gnosis" | "mainnet",
      Number(user.id),
      prisma
    );

    const slotInfo = await getSlotInfo(
      params.chain as "gnosis" | "mainnet",
      prisma
    );

    const validatorStatuses = await getValidatorStatuses(
      user,
      params.chain as "gnosis" | "mainnet",
      missedAttestations,
      getEpochFromSlot(
        params.chain as "gnosis" | "mainnet",
        slotInfo.lastSlotProcessed
      )
    );

    return NextResponse.json({
      username: user.username,
      validatorStatuses,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
