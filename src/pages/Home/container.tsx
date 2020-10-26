import React, { FunctionComponent, useState } from "react";
import { Home } from "./component";
import { ICommission, useGetVolunteers, useGetCommissions } from "$hooks";

export const HomeContainer: FunctionComponent = () => {
  const [filter, setFilter] = useState<ICommission[]>([]);
  const volunteers = useGetVolunteers({ commissions: filter });
  const commissions = useGetCommissions();

  const onChange = async (selectedCommissionUuid: string) => {
    const selectedCommission = commissions.find(c => c.uuid === selectedCommissionUuid);
    if (!selectedCommission) return;
    setFilter([selectedCommission]);
  };

  return (
    <Home
      commissions={commissions}
      volunteers={volunteers}
      commission={filter[0]}
      setCommissionUuid={onChange}
    />
  );
};
