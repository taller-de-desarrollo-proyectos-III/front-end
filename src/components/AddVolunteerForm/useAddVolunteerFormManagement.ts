import { useCallback } from "react";
import { BackendService } from "../../services/Backend";

export const useAddVolunteerFormManagement = () => {
  const onSubmit = useCallback(
    async (addVolunteerFormFields: IAddVolunteerFormFields) => {
      await BackendService.createVolunteer({
        name: addVolunteerFormFields.name,
        surname: addVolunteerFormFields.surname,
        dni: addVolunteerFormFields.dni
      });
    },
    []
  );
  const initialValues: IAddVolunteerFormFields = {
    name: "",
    surname: "",
    dni: ""
  };
  return {
    onSubmit,
    initialValues
  };
};

export interface IAddVolunteerFormFields {
  name: string;
  surname: string;
  dni: string;
}
