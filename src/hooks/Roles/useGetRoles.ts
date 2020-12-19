import { useEffect, useState } from "react";
import { BackendService } from "$services";

export const useGetRoles = <T = []>(dependencies: T[] = []) => {
  const [roles, setRoles] = useState<IRole[] | undefined>(undefined);
  useEffect(() => {
    BackendService.getRoles().then(({ body }) => setRoles(body));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
  return roles;
};

export interface IRole {
  uuid: string;
  name: string;
  description: string;
}
