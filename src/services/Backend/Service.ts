import { stringify } from "query-string";
import { BackendConfig } from "$config";
import { IUseCreateVolunteerVariables, IUseUpdateVolunteerVariables } from "$hooks";

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
  getVolunteers: (commissionUuids?: string[]) =>
    BackendService.get("volunteers", { commissionUuids }),
  getVolunteerByUuid: (uuid: string) => BackendService.get(`volunteers/${uuid}`),
  getCommissions: () => BackendService.get("commissions"),
  createVolunteer: (variables: IUseCreateVolunteerVariables) =>
    BackendService.post("volunteers", variables),
  updateVolunteer: (variables: IUseUpdateVolunteerVariables) =>
    BackendService.put("volunteers", variables)
};
