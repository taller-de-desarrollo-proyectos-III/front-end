import React, { FunctionComponent, useState } from "react";
import { useGetCommissions } from "$hooks";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Commissions } from "./component";

export const CommissionsContainer: FunctionComponent = () => {
  const [openCommissionForm, setOpenCommissionForm] = useState(false);
  const commissions = useGetCommissions([openCommissionForm]);
  if (!commissions) return <LoadingSpinner />;

  return (
    <Commissions
      commissions={commissions}
      setOpenCommissionForm={setOpenCommissionForm}
      openCommissionForm={openCommissionForm}
    />
  );
};
