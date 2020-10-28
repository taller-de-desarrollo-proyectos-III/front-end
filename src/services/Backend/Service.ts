import { stringify } from "query-string";
import { BackendConfig } from "$config";
import { IUseCreateVolunteerVariables } from "../../hooks/Volunteers/useCreateVolunteer";

export const BackendService = {
  get: async <TParams>(endpoint: string, params?: TParams) => {
    const stringifiedParams = stringify(params || {}, { arrayFormat: "bracket" });
    const response = await fetch(`${BackendConfig.url}/${endpoint}?${stringifiedParams}`, {
      method: "GET"
    });
    const body = await response.json();
    return { body, status: response.status };
  },
  getVolunteers: (commissionUuids?: string[]) =>
    BackendService.get("volunteers", { commissionUuids }),
  getCommissions: () => BackendService.get("commissions"),
  post: async <TParams>(endpoint: string, params?: TParams) => {
    const response = await fetch(`${BackendConfig.url}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    });
    const body = await response.json();
    return { body, status: response.status };
  },
  createVolunteer: (volunteer: IUseCreateVolunteerVariables) =>
    BackendService.post("volunteers", volunteer)
};
