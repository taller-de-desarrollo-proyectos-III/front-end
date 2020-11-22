import { BackendService } from "$services";
import { IUseCreateRoleVariables } from "$hooks";

export const useUpdateRole = () => {
  const updateRole = (variables: IUseUpdateRoleVariables) => BackendService.updateRole(variables);
  return { updateRole };
};

export interface IUseUpdateRoleVariables extends IUseCreateRoleVariables {
  uuid: string;
}
