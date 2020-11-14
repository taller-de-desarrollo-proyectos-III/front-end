import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const TableBody: FunctionComponent<IComponent> = ({ className, children }) => (
  <tbody className={classNames(className, styles.body)}>{children}</tbody>
);

interface IComponent {
  className?: string;
}
