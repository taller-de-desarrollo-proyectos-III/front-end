import React from "react";
import { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const Title: FunctionComponent<IComponentProps> = ({ title }) => (
  <h1 className={styles.title}>{title}</h1>
);

interface IComponentProps {
  title: string;
}
