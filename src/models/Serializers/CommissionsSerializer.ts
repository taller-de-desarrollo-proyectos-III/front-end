import { ICommission } from "$hooks";

export const CommissionsSerializer = {
  serialize: (commissions: ICommission[]) =>
    commissions.map(commission => commission.name).join(",")
};
