import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const Table: FunctionComponent<IComponentProps> = ({ children, body }) => (
  <div className={styles.tableOverview}>
    <table>
      {children}
      <tbody>{body}</tbody>
    </table>
  </div>
);

interface IComponentProps {
  body: React.ReactNode;
}
