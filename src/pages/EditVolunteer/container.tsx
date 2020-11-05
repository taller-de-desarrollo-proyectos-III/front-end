import React, { Fragment, FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { EditVolunteer } from "./component";
import { useGetVolunteerByUuid, useUpdateVolunteer, IUseCreateVolunteerVariables } from "$hooks";
import { useHistory } from "react-router-dom";
import { nullToUndefined } from "$models";
import { RoutesBuilder } from "$models";

export const EditVolunteerContainer: FunctionComponent = () => {
  const { uuid } = useParams();
  const volunteer = useGetVolunteerByUuid(uuid);
  const { updateVolunteer } = useUpdateVolunteer();
  const history = useHistory();

  if (!volunteer) return <Fragment />;

  const onSubmit = async (variables: IUseCreateVolunteerVariables) => {
    await updateVolunteer({ ...variables, uuid });
    history.push(RoutesBuilder.volunteers.home());
  };

  return (
    <EditVolunteer
      initialValues={{
        ...nullToUndefined(volunteer),
        commissionUuids: volunteer.commissions.map(commission => commission.uuid)
      }}
      onSubmit={onSubmit}
    />
  );
};
