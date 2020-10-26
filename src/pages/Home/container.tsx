import React, { Fragment, FunctionComponent, useState } from "react";

import { Home } from "./component";
import { useGetVolunteer, useGetCommission } from "$hooks";

export const HomeContainer: FunctionComponent = () => {

  const [commission, setCommission] = useState<string>("");
  const volunteers = useGetVolunteer();
  const commissions = useGetCommission();

  if (volunteers.loading) return <Fragment/>;

  if (commissions.loading) return <Fragment/>;

  return (
    <Home
      commissions={commissions.data}
      volunteers={volunteers.data}
      commission={commission}
      setCommission={setCommission}
    />
  );
};
