import React from "react";
import { useHistory } from "react-router-dom";
import { FunctionComponent } from "react";
import { CreateVolunteer } from "./component";
import {
  IUseCreateVolunteerVariables,
  useCreateVolunteer
} from "$hooks";

export const CreateVolunteerContainer: FunctionComponent = () => {
  const { createVolunteer } =  useCreateVolunteer();
  const history = useHistory();

  const onSubmit = async (variables: IUseCreateVolunteerVariables) => {
    await createVolunteer(variables);
    history.push("/");
  };
  return(
    <CreateVolunteer
      initialValues={{ name: "", surname: "", dni: "" }}
      onSubmit={onSubmit} />
  );
};
