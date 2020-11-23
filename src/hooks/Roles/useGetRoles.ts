import { useEffect, useState } from "react";
import { BackendService } from "$services";

export const useGetRoles = <T>(dependencies?: T[]) => {
  const [roles, setRoles] = useState<IRole[]>([]);
  useEffect(() => {
    BackendService.getRoles().then(({ body }) => setRoles(body));
  }, dependencies);
  return roles;
};

export interface IRole {
  uuid: string;
  name: string;
}
