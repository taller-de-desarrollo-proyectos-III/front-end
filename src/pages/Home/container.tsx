import React, { FunctionComponent, useState } from "react";
import { Home } from "./component";
import { ICommission, IVolunteer, useGetVolunteers, useGetCommissions } from "$hooks";

export const HomeContainer: FunctionComponent = () => {
  const [commission, setCommission] = useState<ICommission | undefined>(undefined);
  const [volunteers, setVolunteers] = useState<IVolunteer[]>([]);
  const [commissions, setCommissions] = useState<ICommission[]>([]);
  useGetVolunteers({ commissions: commission ? [commission]: [], setVolunteers });
  useGetCommissions({ setCommissions });

  const onChange = async (selectedCommissionUuid: string) => {
    const selectedCommission = commissions.find(c => c.uuid === selectedCommissionUuid);
    if (!selectedCommission) return;
    setCommission(selectedCommission);
  };

  return (
    <Home
      commissions={commissions}
      volunteers={volunteers}
      commission={commission}
      setCommissionUuid={onChange}
    />
  );
};
