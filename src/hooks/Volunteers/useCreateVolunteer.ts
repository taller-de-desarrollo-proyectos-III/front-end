import { BackendService } from "../../services/Backend";

export const useCreateVolunteer = () => {
  const createVolunteer = ({ name, surname, dni }: IUseCreateVolunteerVariables) =>
    BackendService.createVolunteer({ name, surname, dni });
  return { createVolunteer };
};

export interface IUseCreateVolunteerVariables {
  name: string;
  surname: string;
  dni: string;
}
