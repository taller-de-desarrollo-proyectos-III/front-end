import React, { FunctionComponent, useState, useEffect } from "react";
import { Home } from "./component";
import { ICommission, useGetVolunteers, useGetCommissions } from "$hooks";

export const HomeContainer: FunctionComponent = () => {
  const [filter, setFilter] = useState<ICommission[]>([]);
  const volunteers = useGetVolunteers({ commissions: filter });
  const commissions = useGetCommissions();
  useEffect(() => setFilter(commissions), [commissions]);

  const setCommissionUuids = async ({ commissionUuids }: { commissionUuids: string[] }) => {
    if (commissionUuids.length === 0) {
      setFilter(commissions);
      return;
    }
    const selectedCommissions = commissionUuids.map(uuid => {
      const commission = commissions.find(c => c.uuid === uuid);
      if (!commission) throw new Error("no commission found");
      return commission;
    });
    setFilter(selectedCommissions);
  };
  return (
    <Home
      volunteers={volunteers}
      selectedCommissionUuids={[]}
      setCommissionUuids={setCommissionUuids}
    />
  );
};
