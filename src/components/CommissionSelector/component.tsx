import React, { ChangeEvent, FunctionComponent } from "react";
import { Field, FieldAttributes } from "formik";
import { TextField } from "formik-material-ui";
import styles from "./styles.module.scss";
import { MenuItem } from "@material-ui/core";
import { ICommission } from "$hooks";

export const CommissionSelector: FunctionComponent<IComponentProps> = ({
  commissions,
  ...props
}) => (
  <Field
    className={styles.selector}
    component={TextField}
    select
    SelectProps={{ multiple: true }}
    variant={"outlined"}
    {...props}
  >
    {commissions.map(commission => (
      <MenuItem key={commission.uuid} value={commission.uuid}>
        {commission.name}
      </MenuItem>
    ))}
  </Field>
);

interface IComponentProps extends FieldAttributes<any> {
  commissions: ICommission[];
  onChange: (event: ChangeEvent<{ value: string[] }>) => void;
}
