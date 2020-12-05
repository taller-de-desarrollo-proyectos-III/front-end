import React, { FunctionComponent } from "react";
import { IState } from "$hooks";
import { StatesTable } from "$components/StatesTable";
import { NavBar } from "$components/NavBar";
import { Title } from "$components/Title";
import { MainContent } from "$components/MainContent";
import { Button } from "$components/Button";
import { CreateStateForm } from "$components/CreateStateForm";
import styles from "./styles.module.scss";

export const States: FunctionComponent<IComponentProps> = ({
  states,
  setOpenStateForm,
  openStateForm
}) => (
  <MainContent>
    <NavBar />
    <div className={styles.body}>
      <Title className={styles.title} title={"Listado de estados"} />
      <Button className={styles.addState} onClick={() => setOpenStateForm(true)}>
        Agregar
      </Button>
      <StatesTable className={styles.table} states={states} />
      <CreateStateForm isOpen={openStateForm} onClose={() => setOpenStateForm(false)} />
    </div>
  </MainContent>
);

interface IComponentProps {
  states: IState[];
  setOpenStateForm: (isOpen: boolean) => void;
  openStateForm: boolean;
}
