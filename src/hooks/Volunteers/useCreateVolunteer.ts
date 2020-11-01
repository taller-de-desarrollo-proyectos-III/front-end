import { BackendService } from "../../services/Backend";

export const useCreateVolunteer = () => {
  const createVolunteer = (volunteer: IUseCreateVolunteerVariables) =>
    BackendService.createVolunteer(volunteer);
  return { createVolunteer };
};

export interface IUseCreateVolunteerVariables {
  name: string;
  surname: string;
  dni: string;
  commissionUuids: string[];
}
