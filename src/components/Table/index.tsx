import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const Table: FunctionComponent<IComponentProps> = ({ children, className }) => (
  <div className={classNames(className, styles.tableOverview)}>
    <table>{children}</table>
  </div>
);

interface IComponentProps {
  className?: string;
}
