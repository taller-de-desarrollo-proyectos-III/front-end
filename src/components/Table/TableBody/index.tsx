import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const TableBody: FunctionComponent<IComponent> = ({ className, children }) => (
  <div className={classNames(className, styles.body)}>{children}</div>
);

interface IComponent {
  className?: string;
}
