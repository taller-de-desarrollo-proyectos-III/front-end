import { useEffect, useState } from "react";
import { ICommission } from "../Commissions";
import { IVolunteer } from "$hooks";
import { BackendService } from "$services";

export const useGetVolunteers = ({ commissions }: IUseGetVolunteers) => {
  const [volunteers, setVolunteers] = useState<IVolunteer[]>([]);
  useEffect(() => {
    BackendService.getVolunteers(commissions.map(({ uuid }) => uuid)).then(({ body }) =>
      setVolunteers(body)
    );
  }, [commissions]);
  return volunteers;
};

interface IUseGetVolunteers {
  commissions: ICommission[];
}
