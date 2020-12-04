import React, { FunctionComponent, useState, useEffect } from "react";
import { Home } from "./component";
import { useGetCommissions, useGetVolunteers } from "$hooks";
import { IInitialValues } from "$components/VolunteersFilter/interfaces";

export const HomeContainer: FunctionComponent = () => {
  const commissions = useGetCommissions();
  const [filter, setFilter] = useState<IInitialValues>({ commissionUuids: [] });
  const volunteers = useGetVolunteers(filter);
  useEffect(() => {
    setFilter({ commissionUuids: commissions.map(({ uuid }) => uuid) });
  }, [commissions]);

  return <Home volunteers={volunteers} filter={filter} setFilter={setFilter} />;
};
