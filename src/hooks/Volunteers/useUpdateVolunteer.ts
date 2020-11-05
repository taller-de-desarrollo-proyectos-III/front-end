import { BackendService } from "../../services/Backend";
import { IUseCreateVolunteerVariables } from "$hooks";

export const useUpdateVolunteer = () => {
  const updateVolunteer = (variables: IUseUpdateVolunteerVariables) =>
    BackendService.updateVolunteer(variables);
  return { updateVolunteer };
};

export interface IUseUpdateVolunteerVariables extends IUseCreateVolunteerVariables {
  uuid: string;
}
