import { BackendService } from "$services";
import { IUseCreateCommissionVariables } from "$hooks";

export const useUpdateCommission = () => {
  const updateCommission = (variables: IUseUpdateCommissionVariables) =>
    BackendService.updateCommission(variables);
  return { updateCommission };
};

export interface IUseUpdateCommissionVariables extends IUseCreateCommissionVariables {
  uuid: string;
}
