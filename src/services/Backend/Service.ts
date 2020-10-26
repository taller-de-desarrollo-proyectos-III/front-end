import { stringify } from "query-string";
import { BackendConfig } from "$config";

export const BackendService = {
  get: async <TParams>(endpoint: string, params?: TParams) => {
    const stringifiedParams = stringify(params || {}, { arrayFormat: "comma" });
    const response = await fetch(`${BackendConfig.url}/${endpoint}?${stringifiedParams}`, {
      method: "GET"
    });
    const body = await response.json();
    return { body, status: response.status };
  },
  getVolunteers: async (commissionUuids?: string[]) =>
    BackendService.get("volunteers", { commissionUuids })
};
