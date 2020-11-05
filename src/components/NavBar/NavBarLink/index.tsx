import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { NavLink, NavLinkProps } from "react-router-dom";

export const NavBarLink: FunctionComponent<IComponentProps> = ({ className, label, ...props }) => (
  <NavLink
    className={classNames(className, styles.link)}
    activeClassName={styles.activeLink}
    {...props}
  >
    <h3 className={styles.linkLabel}>{label}</h3>
  </NavLink>
);

interface IComponentProps extends NavLinkProps {
  label: string;
}
