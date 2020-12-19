import { BackendService } from "$services";

export const useCreateRole = () => {
  const createRole = (variables: IUseCreateRoleVariables) => BackendService.createRole(variables);
  return { createRole };
};

export interface IUseCreateRoleVariables {
  name: string;
  description?: string;
}
