import { BackendService } from "../../services/Backend";

export const useCreateCommission = () => {
  const createCommission = (variables: IUseCreateCommissionVariables) =>
    BackendService.createCommission(variables);
  return { createCommission };
};

export interface IUseCreateCommissionVariables {
  name: string;
}
