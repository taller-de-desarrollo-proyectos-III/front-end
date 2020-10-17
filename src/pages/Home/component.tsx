import React, { FunctionComponent } from "react";

import { IDummy } from "$hooks";

import { NavBar } from "$components/NavBar";
import { MainContent } from "$components/MainContent";
import { Button } from "$components/Button";
import { Field } from "$components/Field";

import styles from "./styles.module.scss";

export const Home: FunctionComponent<IComponentProps> = (
  {
    onSubmit,
    dummy,
    setWelcomeMessage
  }
) => (
  <MainContent>
    <NavBar />
    <header className={styles.header}>
      <h1 className={styles.title}>
        Bienvenido
      </h1>
      {
        dummy &&
        <p className={styles.description}>
          {`Dummy: ${dummy.uuid}-${dummy.welcomeMessage}`}
        </p>
      }
      <Field
        name="welcomeMessage"
        label="welcomeMessage"
        onChange={event => setWelcomeMessage(event.target.value)}
      />
      <Button onClick={onSubmit}>
        Crear
      </Button>
    </header>
  </MainContent>
);

interface IComponentProps {
  onSubmit: () => void;
  dummy?: IDummy;
  setWelcomeMessage: (welcomeMessage: string) => void;
}
