import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const TableItem: FunctionComponent<IComponent> = ({ className, children }) => (
  <div className={classNames(className, styles.tableItem)}>{children}</div>
);

interface IComponent {
  className?: string;
}
