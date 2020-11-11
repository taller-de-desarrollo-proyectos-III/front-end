import React from "react";
import classNames from "classnames";
import { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const Title: FunctionComponent<IComponentProps> = ({ title, className }) => (
  <h1 className={classNames(className, styles.title)}>{title}</h1>
);

interface IComponentProps {
  title: string;
  className?: string;
}
