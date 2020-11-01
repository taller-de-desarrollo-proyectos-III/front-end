import React, { FunctionComponent } from "react";

import styles from "./styles.module.scss";
import { Link, NavLink } from "react-router-dom";
import { RoutesBuilder } from "../../models";

export const NavBar: FunctionComponent = () => (
  <div className={styles.navBar}>
    <Link to={RoutesBuilder.volunteers.home()}>
      <img
        className={styles.logo}
        src={
          "https://doprod-statics.s3.amazonaws.com/pictures/logo/6308/large_9ccaa5a0-5f13-4270-8191-2ed66fd01fe7.png"
        }
      />
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
