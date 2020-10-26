import { useEffect } from "react";
import { ICommission } from "../Commissions";
import { BackendService } from "../../services/Backend";

export const useGetVolunteers = ({ commissions, setVolunteers }: IUseGetVolunteers) => {
  useEffect(
    () => {
      BackendService
        .getVolunteers(commissions.map(({ uuid }) => uuid))
        .then(({ body }) => setVolunteers(body));
    },
    [commissions, setVolunteers]
  );
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
  setVolunteers: (volunteers: IVolunteer[]) => void;
}
