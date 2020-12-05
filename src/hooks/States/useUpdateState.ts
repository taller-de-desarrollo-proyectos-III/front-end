import { BackendService } from "$services";
import { IUseCreateStateVariables } from "$hooks";

export const useUpdateState = () => {
  const updateState = (variables: IUseUpdateStateVariables) =>
    BackendService.updateState(variables);
  return { updateState };
};

export interface IUseUpdateStateVariables extends IUseCreateStateVariables {
  uuid: string;
}
