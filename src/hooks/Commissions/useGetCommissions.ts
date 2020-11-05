import { useEffect, useState } from "react";
import { BackendService } from "$services";

export const useGetCommissions = () => {
  const [commissions, setCommissions] = useState<ICommission[]>([]);
  useEffect(() => {
    BackendService.getCommissions().then(({ body }) => setCommissions(body));
  }, []);
  return commissions;
};

export interface ICommission {
  uuid: string;
  name: string;
}
