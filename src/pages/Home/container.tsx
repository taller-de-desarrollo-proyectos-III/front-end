import React, { FunctionComponent, useState } from "react";

import { Home } from "./component";
import { useGetVolunteer, useGetCommission } from "$hooks";
import {} from "../../hooks/Commissions";

export const HomeContainer: FunctionComponent = () => {

  const [commission, setCommission] = useState<string>("");
  const volunteersList = useGetVolunteer;
  const commissionList = useGetCommission;

  return (
    <Home
      commission={commission}
      volunteersList={volunteersList}
      commissionList={commissionList}
      setCommission={setCommission}
    />
  );
};
