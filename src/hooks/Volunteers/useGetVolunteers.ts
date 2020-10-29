import { useEffect, useState } from "react";
import { ICommission } from "../Commissions";
import { BackendService } from "../../services/Backend";

export const useGetVolunteers = ({ commissions }: IUseGetVolunteers) => {
  const [volunteers, setVolunteers] = useState<IVolunteer[]>([]);
  useEffect(() => {
    BackendService.getVolunteers(commissions.map(({ uuid }) => uuid)).then(({ body }) =>
      setVolunteers(body)
    );
  }, [commissions]);
  return volunteers;
};

export interface IVolunteer {
  uuid: number;
  name: string;
  surname: string;
  dni: number;
  commissions: ICommission[];
}

interface IUseGetVolunteers {
  commissions: ICommission[];
}
