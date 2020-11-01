import React, { FunctionComponent } from "react";

import styles from "./styles.module.scss";
import { Link, NavLink } from "react-router-dom";
import { RoutesBuilder } from "$models";
import { Logo } from "../Logo";

export const NavBar: FunctionComponent = () => (
  <div className={styles.navBar}>
    <Link to={RoutesBuilder.volunteers.home()}>
      <Logo />
    </Link>
    <NavLink
      className={styles.link}
      activeClassName={styles.activeLink}
      to={RoutesBuilder.volunteers.create()}
    >
      <h3 className={styles.linkLabel}>Crear voluntarie</h3>
    </NavLink>
  </div>
);
