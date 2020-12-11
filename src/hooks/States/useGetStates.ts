import { useEffect, useState } from "react";
import { BackendService } from "$services";

export const useGetStates = <T>(dependencies: T[] = []) => {
  const [states, setStates] = useState<IState[] | undefined>(undefined);
  useEffect(() => {
    BackendService.getStates().then(({ body }) => setStates(body));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
  return states;
};

export interface IState {
  uuid: string;
  name: string;
}
