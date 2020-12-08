import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const TableRow: FunctionComponent = ({ children }) => (
  <div className={styles.row}>{children}</div>
);
