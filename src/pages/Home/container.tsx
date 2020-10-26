import React, { Fragment, FunctionComponent, useState, useEffect } from "react";
import { Home } from "./component";
import { BackendService } from "../../services";
import { useGetCommissions, ICommission, IVolunteer } from "$hooks";

export const HomeContainer: FunctionComponent = () => {
  const [commission, setCommission] = useState<ICommission | undefined>(undefined);
  const [volunteers, setVolunteers] = useState<IVolunteer[]>([]);
  const commissions = useGetCommissions();

  useEffect(
    () => {
      BackendService.getVolunteers(commission ? [commission.uuid] : [])
        .then(({ body }) => setVolunteers(body));
    },
    [commission]
  );

  if (commissions.loading) return <Fragment/>;

  const onChange = async (selectedCommissionUuid: string) => {
    const selectedCommission = commissions.data.find(c => c.uuid === selectedCommissionUuid);
    if (!selectedCommission) return;
    setCommission(selectedCommission);
  };

  return (
    <Home
      commissions={commissions.data}
      volunteers={volunteers}
      commission={commission}
      setCommissionUuid={onChange}
    />
  );
};
