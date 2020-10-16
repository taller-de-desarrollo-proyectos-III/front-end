import React, { FunctionComponent } from "react";

import { IDummy } from "$hooks";

import { NavBar } from "$components/NavBar";
import { MainContent } from "$components/MainContent";

import styles from "./styles.module.scss";

export const Home: FunctionComponent<IComponentProps> = ({ onClick, dummy }) => (
  <MainContent>
    <NavBar />
    <header className={styles.header}>
      <h1 className={styles.title}>
        Home: {dummy.uuid}
      </h1>
      <p className={styles.description} onClick={onClick}>
        {`Esta en la pantalla principal: ${dummy.welcomeMessage}`}
      </p>
    </header>
  </MainContent>
);

interface IComponentProps {
  onClick: () => void;
  dummy: IDummy;
}
