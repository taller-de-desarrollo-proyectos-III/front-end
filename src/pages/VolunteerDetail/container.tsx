import React, { Fragment, FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useGetVolunteerByUuid } from "$hooks/Volunteers";
import { VolunteerDetail } from "./component";

export const VolunteerDetailContainer: FunctionComponent = () => {
  const { uuid } = useParams();
  const volunteer = useGetVolunteerByUuid(uuid);

  if (!volunteer) return <Fragment />;

  return <VolunteerDetail {...volunteer} />;
};
