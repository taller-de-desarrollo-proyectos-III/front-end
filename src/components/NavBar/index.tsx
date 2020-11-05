import React, { FunctionComponent } from "react";

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { NavBarLink } from "./NavBarLink";
import { RoutesBuilder } from "$models";
import { Logo } from "$components/Logo";

export const NavBar: FunctionComponent = () => (
  <div className={styles.navBar}>
    <Link to={RoutesBuilder.volunteers.home()}>
      <Logo />
    </Link>
    <NavBarLink label={"Crear voluntarie"} to={RoutesBuilder.volunteers.create()} />
  </div>
);
