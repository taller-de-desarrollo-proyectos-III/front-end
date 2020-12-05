import { useEffect, useState } from "react";
import { BackendService } from "$services";

export const useGetStates = <T>(dependencies: T[] = []) => {
  const [states, setStates] = useState<IState[]>([]);
  useEffect(() => {
    BackendService.getStates().then(({ body }) => setStates(body));
  }, dependencies);
  return states;
};

export interface IState {
  uuid: string;
  name: string;
}