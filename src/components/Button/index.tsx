import React, { FunctionComponent, HTMLProps } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const Button: FunctionComponent<IButtonProps> = ({ className, children, ...props }) => (
  <button
    className={classNames(className, styles.main, styles.text, styles.color, styles.fitContent)}
    {...props}
  >
    {children}
  </button>
);

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  className?: string;
  onClick?: (state: object) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}
