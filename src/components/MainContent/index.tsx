import React, { FunctionComponent } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export const MainContent: FunctionComponent<IMainContentProps> = ({
  className,
  width = "narrow",
  children
}) => <div className={classNames(styles.mainContent, styles[width], className)}>{children}</div>;

export interface IMainContentProps {
  width?: "narrow" | "fullWidth";
  className?: string;
}
