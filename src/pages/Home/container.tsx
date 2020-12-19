import React, { FunctionComponent, useState } from "react";
import { useHistory } from "react-router-dom";
import { Home } from "./component";
import { useGetVolunteers } from "$hooks";
import { RoutesBuilder } from "$models";
import { IVolunteersFilter } from "$components/VolunteersFilter/interfaces";

export const HomeContainer: FunctionComponent = () => {
  const history = useHistory();
  const [filter, setFilter] = useState<IVolunteersFilter>({
    commissionUuids: "ALL",
    roleUuids: "ALL",
    stateUuids: "ALL"
  });
  const volunteers = useGetVolunteers({ filter });
  return (
    <Home
      volunteers={volunteers}
      filter={filter}
      setFilter={setFilter}
      onClickAddVolunteers={() => history.push(RoutesBuilder.volunteers.create())}
    />
  );
};
