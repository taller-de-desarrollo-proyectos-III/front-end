import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const Table: FunctionComponent = ({ children }) => (
  <div className={styles.tableOverview}>
    <table>{children}</table>
  </div>
);
