import React, { ChangeEvent, FunctionComponent } from "react";
import { Field, FieldAttributes } from "formik";
import { TextField } from "formik-material-ui";
import styles from "./styles.module.scss";
import { MenuItem } from "@material-ui/core";
import { IRole } from "$hooks";

export const RoleSelector: FunctionComponent<IComponentProps> = ({ roles, ...props }) => (
  <Field
    className={styles.selector}
    component={TextField}
    select
    SelectProps={{ multiple: true }}
    variant={"outlined"}
    {...props}
  >
    {roles.map(role => (
      <MenuItem key={role.uuid} value={role.uuid}>
        {role.name}
      </MenuItem>
    ))}
  </Field>
);

interface IComponentProps extends FieldAttributes<any> {
  roles: IRole[];
  onChange: (event: ChangeEvent<{ value: string[] }>) => void;
}
