import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const TableItem: FunctionComponent = ({ children }) => (
  <tr className={styles.tableItem}>{children}</tr>
);
