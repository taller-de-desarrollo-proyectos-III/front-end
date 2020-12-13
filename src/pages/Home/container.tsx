import React, { FunctionComponent, useState } from "react";
import { Home } from "./component";
import { useGetVolunteers } from "$hooks";
import { IInitialValues } from "$components/VolunteersFilter/interfaces";

export const HomeContainer: FunctionComponent = () => {
  const [filter, setFilter] = useState<IInitialValues>({
    commissionUuids: "ALL",
    roleUuids: "ALL",
    stateUuids: "ALL"
  });
  const volunteers = useGetVolunteers({ filter });
  return <Home volunteers={volunteers} filter={filter} setFilter={setFilter} />;
};
