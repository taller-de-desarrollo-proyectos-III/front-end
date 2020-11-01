import React, { ChangeEvent, FunctionComponent } from "react";
import { FieldAttributes, useFormikContext } from "formik";
import { useGetCommissions } from "$hooks";
import { CommissionSelector } from "./component";

export const CommissionSelectorContainer: FunctionComponent<FieldAttributes<any>> = props => {
  const commissions = useGetCommissions();
  const { setFieldValue } = useFormikContext();
  const onChange = (event: ChangeEvent<{ value: string[] }>) => {
    setFieldValue(props.name, event.target.value);
  };

  return <CommissionSelector onChange={onChange} commissions={commissions} {...props} />;
};
