import React, { FunctionComponent, useState } from "react";
import { useGetCommissions } from "$hooks";
import { Commissions } from "./component";

export const CommissionsContainer: FunctionComponent = () => {
  const [openCommissionForm, setOpenCommissionForm] = useState(false);
  const commissions = useGetCommissions([openCommissionForm]);

  return (
    <Commissions
      commissions={commissions}
      setOpenCommissionForm={setOpenCommissionForm}
      openCommissionForm={openCommissionForm}
    />
  );
};
