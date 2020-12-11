import React, { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useGetVolunteerByUuid } from "$hooks/Volunteers";
import { RoutesBuilder } from "$models";
import { VolunteerDetail } from "./component";

export const VolunteerDetailContainer: FunctionComponent = () => {
  const history = useHistory();
  const { uuid } = useParams();
  const volunteer = useGetVolunteerByUuid(uuid);

  return (
    <VolunteerDetail
      volunteer={volunteer}
      onClickEdit={() => history.push(RoutesBuilder.volunteers.edit(volunteer!.uuid))}
    />
  );
};
