import { stringify } from "query-string";
import { BackendConfig } from "$config";
import { IUseCreateVolunteerVariables, IUseUpdateVolunteerVariables } from "$hooks";
import { IUseCreateCommissionVariables, IUseUpdateCommissionVariables } from "$hooks";
import { IUseCreateRoleVariables, IUseUpdateRoleVariables } from "$hooks";
import { IVolunteersFilter } from "$components/VolunteersFilter/interfaces";
import { IUseCreateStateVariables, IUseUpdateStateVariables } from "$hooks";

export const BackendService = {
  get: async <TParams>(endpoint: string, params?: TParams) => {
    const stringifiedParams = stringify(params || {}, { arrayFormat: "bracket" });
    const response = await fetch(`${BackendConfig.url}/${endpoint}?${stringifiedParams}`, {
      method: "GET"
    });
    const body = await response.json();
    return { body, status: response.status };
  },
  post: async <TParams>(endpoint: string, params?: TParams) => {
    const response = await fetch(`${BackendConfig.url}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    });
    const body = await response.json();
    return { body, status: response.status };
  },
  put: async <TParams>(endpoint: string, params?: TParams) => {
    const response = await fetch(`${BackendConfig.url}/${endpoint}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    });
    const body = await response.json();
    return { body, status: response.status };
  },
  getVolunteers: (attributes: IVolunteersFilter) => BackendService.get("volunteers", attributes),
  getVolunteerByUuid: (uuid: string) => BackendService.get(`volunteers/${uuid}`),
  getCommissions: () => BackendService.get("commissions"),
  createVolunteer: (variables: IUseCreateVolunteerVariables) =>
    BackendService.post("volunteers", variables),
  updateVolunteer: (variables: IUseUpdateVolunteerVariables) =>
    BackendService.put("volunteers", variables),
  createCommission: (variables: IUseCreateCommissionVariables) =>
    BackendService.post("commissions", variables),
  updateCommission: (variables: IUseUpdateCommissionVariables) =>
    BackendService.put("commissions", variables),
  getRoles: () => BackendService.get("roles"),
  createRole: (variables: IUseCreateRoleVariables) => BackendService.post("roles", variables),
  updateRole: (variables: IUseUpdateRoleVariables) => BackendService.put("roles", variables),
  getStates: () => BackendService.get("states"),
  createState: (variables: IUseCreateStateVariables) => BackendService.post("states", variables),
  updateState: (variables: IUseUpdateStateVariables) => BackendService.put("states", variables)
};
