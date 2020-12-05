import { BackendService } from "$services";

export const useCreateState = () => {
  const createState = (variables: IUseCreateStateVariables) =>
    BackendService.createState(variables);
  return { createState };
};

export interface IUseCreateStateVariables {
  name: string;
}
