import { ValidatorInfo, ValidatorStatusesByWithdrawal } from "@/apiTypes";

export function groupValidatorsByWithdrawalAddress(
  validators: ValidatorInfo[]
): ValidatorStatusesByWithdrawal[] {
  // Group validators by withdrawal address
  const groupedByWithdrawal = validators.reduce(
    (acc, validator) => {
      const address = validator.withdrawal_address || "unknown";
      if (!acc[address]) {
        acc[address] = {
          activeIds: [],
          inactiveIds: [],
          slashedIds: [],
          exitedIds: [],
        };
      }

      // Add validator ID to the appropriate status array
      switch (validator.attestation_status) {
        case "active":
          acc[address].activeIds.push(validator.validator_id);
          break;
        case "inactive":
          acc[address].inactiveIds.push(validator.validator_id);
          break;
        case "slashed":
          acc[address].slashedIds.push(validator.validator_id);
          break;
        case "exited":
          acc[address].exitedIds.push(validator.validator_id);
          break;
      }

      return acc;
    },
    {} as Record<string, ValidatorStatusesByWithdrawal["validatorStatuses"]>
  );

  // Convert to array format
  return Object.entries(groupedByWithdrawal).map(
    ([withdrawalAddress, validatorStatuses]) => ({
      withdrawalAddress,
      validatorStatuses,
    })
  );
}
