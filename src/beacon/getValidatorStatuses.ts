import { getEpochFromSlot, VALIDATOR_STATUS } from "@/src/beacon/utils";
import { Committee, User, Validator } from "@prisma/client";

export function getValidatorStatuses(
  user: Pick<User, "inactiveOnMissedAttestations"> & {
    validators: Validator[];
  },
  chain: "gnosis" | "mainnet",
  userMissedAttestations: Committee[],
  maxEpochToQuery: number
) {
  const inactiveIds: number[] = [];
  for (const validator of user.validators) {
    // get the last missed attestations for each validator
    const recentMissed = userMissedAttestations
      .filter((entry) => entry.validatorIndex === validator.id)
      .slice(0, user.inactiveOnMissedAttestations)
      .map((entry) => getEpochFromSlot(chain, entry.slot))
      .filter(
        // Get the last N epochs where N is the user's inactivity threshold.
        // Each validator attest once per epoch.
        (epoch) => epoch > maxEpochToQuery - user.inactiveOnMissedAttestations
      );

    // Skip if not enough missed attestations
    if (recentMissed.length < user.inactiveOnMissedAttestations) {
      continue;
    }

    inactiveIds.push(validator.id);
  }

  const activeIds = user.validators
    .filter((v) => !inactiveIds.includes(v.id))
    .map((v) => v.id);

  return {
    activeIds,
    inactiveIds,
    slashedIds: user.validators
      .filter(
        (v) =>
          v.status === VALIDATOR_STATUS.active_slashed ||
          v.status === VALIDATOR_STATUS.exited_slashed
      )
      .map((v) => v.id),
    exitedIds: user.validators
      .filter(
        (v) =>
          v.status === VALIDATOR_STATUS.exited_unslashed ||
          v.status === VALIDATOR_STATUS.withdrawal_done
      )
      .map((v) => v.id),
  };
}
