export type UserValidators = {
  username: string;
  validatorStatuses: {
    activeIds: number[];
    inactiveIds: number[];
    slashedIds: number[];
    exitedIds: number[];
  };
};
