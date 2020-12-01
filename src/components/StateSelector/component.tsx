import React, { ChangeEvent, FunctionComponent } from "react";
import { Field, FieldAttributes } from "formik";
import { TextField } from "formik-material-ui";
import styles from "./styles.module.scss";
import { MenuItem } from "@material-ui/core";
import { IState } from "$hooks";

export const StateSelector: FunctionComponent<IComponentProps> = ({ states, ...props }) => (
  <Field
    className={styles.selector}
    component={TextField}
    select
    SelectProps={{ multiple: true }}
    variant={"outlined"}
    {...props}
  >
    {states.map(state => (
      <MenuItem key={state.uuid} value={state.uuid}>
        {state.name}
      </MenuItem>
    ))}
  </Field>
);

interface IComponentProps extends FieldAttributes<any> {
  states: IState[];
  onChange: (event: ChangeEvent<{ value: string[] }>) => void;
}
