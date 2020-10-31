import React, { FunctionComponent } from "react";
import { Field, FieldAttributes } from "formik";
import { TextField as TextInput } from "formik-material-ui";
import styles from "./style.module.scss";

export const TextField: FunctionComponent<FieldAttributes<any>> = props => (
  <Field className={styles.textField} component={TextInput} variant={"outlined"} {...props} />
);
