import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const TableHeader: FunctionComponent = ({ children }) => (
  <thead>
    <tr className={styles.tableHeader}>{children}</tr>
  </thead>
);
