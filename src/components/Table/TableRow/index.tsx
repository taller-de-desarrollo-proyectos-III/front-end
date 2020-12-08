import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const TableRow: FunctionComponent = ({ children }) => (
  <tr className={styles.tableItem}>{children}</tr>
);
