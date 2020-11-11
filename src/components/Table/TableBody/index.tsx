import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const TableBody: FunctionComponent = ({ children }) => (
  <tbody className={styles.body}>{children}</tbody>
);
