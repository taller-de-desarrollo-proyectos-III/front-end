import { useEffect, useState } from "react";
import { BackendService } from "$services";

export const useGetCommissions = <T>(dependencies: T[] = []) => {
  const [commissions, setCommissions] = useState<ICommission[]>([]);
  useEffect(() => {
    BackendService.getCommissions().then(({ body }) => setCommissions(body));
  }, dependencies);
  return commissions;
};

export interface ICommission {
  uuid: string;
  name: string;
}
