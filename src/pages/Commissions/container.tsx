import React, { FunctionComponent, useState } from "react";
import { useGetCommissions } from "$hooks";
import { Commissions } from "./component";

export const CommissionsContainer: FunctionComponent = () => {
  const commissions = useGetCommissions();
  const [openCommissionForm, setOpenCommissionForm] = useState(false);

  return (
    <Commissions
      commissions={commissions}
      setOpenCommissionForm={setOpenCommissionForm}
      openCommissionForm={openCommissionForm}
    />
  );
};
