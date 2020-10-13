import React, { FunctionComponent } from "react";

import { NavBar } from "../../components/NavBar";

import styles from "./styles.module.scss";

export const Home: FunctionComponent = () => (
  <div>
    <NavBar />
    <header className={styles.header}>
      <div className={styles.logo}>
        logo
      </div>
      <p className={styles.text}>
        Trabajo Práctico
      </p>
    </header>
  </div>
);
