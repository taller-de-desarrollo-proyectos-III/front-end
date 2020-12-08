import { useEffect, useState } from "react";
import { BackendService } from "$services";

export const useGetCommissions = <T>(dependencies: T[] = []) => {
  const [commissions, setCommissions] = useState<ICommission[] | undefined>(undefined);
  useEffect(() => {
    BackendService.getCommissions().then(({ body }) => setCommissions(body));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
  return commissions;
};

export interface ICommission {
  uuid: string;
  name: string;
}
