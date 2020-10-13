import React, { FunctionComponent } from "react";

import { NavBar } from "$components/NavBar";
import { MainContent } from "$components/MainContent";

import styles from "./styles.module.scss";

export const Home: FunctionComponent = () => (
  <MainContent>
    <NavBar />
    <header className={styles.header}>
      <h1 className={styles.title}>
        Home
      </h1>
      <p className={styles.description}>
        Esta en la pantalla principal
      </p>
    </header>
  </MainContent>
);
