import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Card } from "$components/Card";
import styles from "./styles.module.scss";

export const Table: FunctionComponent<IComponentProps> = ({ children, className }) => (
  <Card className={classNames(className, styles.tableOverview)}>{children}</Card>
);

interface IComponentProps {
  className?: string;
}
