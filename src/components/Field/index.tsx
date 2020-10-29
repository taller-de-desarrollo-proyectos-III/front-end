import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { TextField, TextFieldProps } from "@material-ui/core";

import styles from "./styles.module.scss";

export const Field: FunctionComponent<TextFieldProps> = ({ className, ...props }) => (
  <TextField className={classNames(styles.textInput, className)} {...props} />
);
