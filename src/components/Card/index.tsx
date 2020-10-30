import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

export const Card: FunctionComponent<ICardProps> = ({ className, children }) => (
  <div className={classNames(className, styles.card)}>{children}</div>
);

interface ICardProps {
  className?: string;
}
