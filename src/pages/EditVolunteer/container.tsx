import React, { Fragment, FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { EditVolunteer } from "./component";
import { useGetVolunteerByUuid } from "$hooks";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models";

export const EditVolunteerContainer: FunctionComponent = () => {
  const { uuid } = useParams();
  const volunteer = useGetVolunteerByUuid(uuid);
  const history = useHistory();

  if (!volunteer) return <Fragment />;

  const onSubmit = async () => {
    history.push(RoutesBuilder.volunteers.home());
  };

  return (
    <EditVolunteer
      initialValues={{
        ...volunteer,
        commissionUuids: volunteer.commissions.map(commission => commission.uuid)
      }}
      onSubmit={onSubmit}
    />
  );
};
