import React, { FunctionComponent } from "react";
import { IState, useCreateState } from "$hooks";
import { StatesTable } from "$components/StatesTable";
import { NavBar } from "$components/NavBar";
import { Title } from "$components/Title";
import { MainContent } from "$components/MainContent";
import { Button } from "$components/Button";
import { CreateOrUpdateFormDialog } from "$components/CreateOrUpdateFormDialog";
import styles from "./styles.module.scss";

export const States: FunctionComponent<IComponentProps> = ({
  states,
  setOpenStateForm,
  openStateForm
}) => {
  const { createState } = useCreateState();
  return (
    <MainContent>
      <NavBar />
      <div className={styles.body}>
        <Title className={styles.title} title={"Listado de estados"} />
        <Button className={styles.addState} onClick={() => setOpenStateForm(true)}>
          Agregar
        </Button>
        <StatesTable className={styles.table} states={states} />
        <CreateOrUpdateFormDialog
          title="Escriba el nombre del estado"
          isOpen={openStateForm}
          onClose={() => setOpenStateForm(false)}
          withDescription={false}
          initialValues={{ name: "" }}
          update={false}
          createOrUpdate={createState}
        />
      </div>
    </MainContent>
  );
};

interface IComponentProps {
  states?: IState[];
  setOpenStateForm: (isOpen: boolean) => void;
  openStateForm: boolean;
}
