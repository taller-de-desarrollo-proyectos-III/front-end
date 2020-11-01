import React, { ChangeEvent, FunctionComponent } from "react";
import { FieldAttributes, useFormikContext } from "formik";
import { MenuItem } from "@material-ui/core";
import { useGetCommissions } from "$hooks";
import { CommissionSelector } from "./component";

export const CommissionSelectorContainer: FunctionComponent<FieldAttributes<any>> = props => {
  const commissions = useGetCommissions();
  const { setFieldValue } = useFormikContext();
  const onChange = (event: ChangeEvent<{ value: string[] }>) => {
    setFieldValue(props.name, event.target.value);
  };

  return (
    <CommissionSelector onChange={onChange} {...props}>
      {commissions.map(commission => (
        <MenuItem key={commission.uuid} value={commission.uuid}>
          {commission.name}
        </MenuItem>
      ))}
    </CommissionSelector>
  );
};
