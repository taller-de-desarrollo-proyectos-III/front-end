import React, { ChangeEvent, FunctionComponent } from "react";
import { Field, FieldAttributes, useFormikContext } from "formik";
import { TextField } from "formik-material-ui";
import styles from "./styles.module.scss";
import { MenuItem } from "@material-ui/core";
import { useGetCommissions } from "$hooks";

export const CommissionSelector: FunctionComponent<FieldAttributes<any>> = props => {
  const commissions = useGetCommissions();
  const { setFieldValue } = useFormikContext();
  const handleChange = (event: ChangeEvent<{ value: string[] }>) => {
    setFieldValue(props.name, event.target.value);
  };

  return (
    <Field
      className={styles.selector}
      component={TextField}
      select
      SelectProps={{
        multiple: true
      }}
      variant={"outlined"}
      onChange={handleChange}
      {...props}
    >
      {commissions.map(commission => (
        <MenuItem key={commission.uuid} value={commission.uuid}>
          {commission.name}
        </MenuItem>
      ))}
    </Field>
  );
};
