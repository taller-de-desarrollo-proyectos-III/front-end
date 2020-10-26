import { useGet } from "$hooks/useGet";
import { ICommission } from "../Commissions";

export const useGetVolunteers = (commissionUuids: string[]) => {
  const { get, ...result } = useGet<IUseGetVolunteers, IVolunteer[]>({
    params: { commissionUuids },
    endpoint: "volunteers"
  });
  return { ...result, getVolunteers: () => get && get() };
};

export interface IVolunteer {
  uuid: number;
  name: string;
  surname: string;
  dni: number;
  commissions: ICommission[];
}

interface IUseGetVolunteers {
  commissionUuids: string[];
}
