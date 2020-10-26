import React, { Fragment, FunctionComponent, useState } from "react";

import { Home } from "./component";
import { useGetVolunteers, useGetCommissions } from "$hooks";

export const HomeContainer: FunctionComponent = () => {

  const [commission, setCommission] = useState<string>("");
  const volunteers = useGetVolunteers();
  const commissions = useGetCommissions();

  if (volunteers.loading || commissions.loading) return <Fragment/>;

  return (
    <Home
      commissions={commissions.data}
      volunteers={volunteers.data}
      commission={commission}
      setCommission={setCommission}
    />
  );
};
