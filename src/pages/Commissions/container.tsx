import React, { FunctionComponent } from "react";
import { useGetCommissions } from "$hooks";
import { Commissions } from "./component";

export const CommissionsContainer: FunctionComponent = () => {
  const commissions = useGetCommissions();

  return <Commissions commissions={commissions} />;
};
