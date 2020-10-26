import { useEffect } from "react";
import { BackendService } from "../../services/Backend";

export const useGetCommissions = ({ setCommissions }: IUseGetCommissions) =>
  useEffect(
    () => {
      BackendService.getCommissions().then(({ body }) => setCommissions(body));
    },
    [setCommissions]
  );

export interface IUseGetCommissions {
  setCommissions: (commissions: ICommission[]) => void;
}


export interface ICommission {
  uuid: string;
  name: string;
}
