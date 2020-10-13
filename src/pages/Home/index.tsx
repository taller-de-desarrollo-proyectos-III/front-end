import React, { FunctionComponent } from "react";

import { NavBar } from "$components/NavBar";
import { MainContent } from "$components/MainContent";

import styles from "./styles.module.scss";

export const Home: FunctionComponent = () => (
  <MainContent>
    <NavBar />
    <header className={styles.header}>
      <div className={styles.logo}>
        logo
      </div>
      <p className={styles.text}>
        Trabajo Práctico
      </p>
    </header>
  </MainContent>
);
