import { useEffect, useState } from "react";
import { BackendService } from "../../services/Backend";
import { IVolunteer } from "./useGetVolunteers";

export const useCreateVolunteer = ({ name, surname, dni }: IUseCreateVolunteerVariables) => {
  const [volunteer, setVolunteer] = useState<IVolunteer>();

  useEffect(
    () => {
      BackendService
        .createVolunteer({ name, surname, dni })
        .then(({ body }) => setVolunteer(body));
    }
  );
  return volunteer;
};

export interface IUseCreateVolunteerVariables {
  name: string;
  surname: string;
  dni: string;
}
