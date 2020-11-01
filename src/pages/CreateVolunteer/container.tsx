import React from "react";
import { FunctionComponent } from "react";
import { CreateVolunteer } from "./component";
import { IUseCreateVolunteerVariables, useCreateVolunteer } from "$hooks";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models";

export const CreateVolunteerContainer: FunctionComponent = () => {
  const { createVolunteer } = useCreateVolunteer();
  const history = useHistory();

  const onSubmit = async (variables: IUseCreateVolunteerVariables) => {
    await createVolunteer(variables);
    history.push(RoutesBuilder.volunteers.home());
  };
  return (
    <CreateVolunteer
      initialValues={{ name: "", surname: "", dni: "", commissionUuids: [] }}
      onSubmit={onSubmit}
    />
  );
};
