import React, { FunctionComponent } from "react";
import { Field, FieldAttributes } from "formik";
import { TextField } from "formik-material-ui";
import styles from "./styles.module.scss";

export const CommissionSelector: FunctionComponent<FieldAttributes<any>> = props => (
  <Field
    className={styles.selector}
    component={TextField}
    select
    SelectProps={{
      multiple: true
    }}
    variant={"outlined"}
    {...props}
  />
);
