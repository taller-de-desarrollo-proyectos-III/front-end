import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const Table: FunctionComponent<IComponentProps> = ({ header, body }) => (
  <div className={styles.tableOverview}>
    <table>
      <thead>
        <tr className={styles.tableHeader}>{header}</tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  </div>
);

interface IComponentProps {
  header: React.ReactNode;
  body: React.ReactNode;
}
