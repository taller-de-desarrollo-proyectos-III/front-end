import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const TableHeader: FunctionComponent = ({ children }) => (
  <div className={styles.tableHeader}>{children}</div>
);
