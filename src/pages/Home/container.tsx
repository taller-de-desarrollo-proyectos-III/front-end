import React, { FunctionComponent, useState, useEffect } from "react";
import { Home } from "./component";
import { useGetCommissions, useGetVolunteers, useGetRoles } from "$hooks";
import { IInitialValues } from "$components/VolunteersFilter/interfaces";

export const HomeContainer: FunctionComponent = () => {
  const commissions = useGetCommissions();
  const roles = useGetRoles();
  const [filter, setFilter] = useState<IInitialValues | undefined>(undefined);
  const volunteers = useGetVolunteers(filter);
  useEffect(() => {
    setFilter({
      commissionUuids: commissions.map(({ uuid }) => uuid),
      roleUuids: roles.map(({ uuid }) => uuid)
    });
  }, [commissions, roles]);

  return <Home volunteers={volunteers} filter={filter} setFilter={setFilter} />;
};
