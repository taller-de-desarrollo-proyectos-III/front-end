import React, { FunctionComponent } from "react";
import { ICommission } from "$hooks";
import { CommissionsTable } from "$components/CommissionsTable";
import { NavBar } from "$components/NavBar";
import { Title } from "$components/Title";
import { MainContent } from "$components/MainContent";
import { Button } from "$components/Button";
import { CreateCommissionForm } from "$components/CreateCommissionForm";
import styles from "./styles.module.scss";

export const Commissions: FunctionComponent<IComponentProps> = ({
  commissions,
  setOpenCommissionForm,
  openCommissionForm
}) => (
  <MainContent>
    <NavBar />
    <div className={styles.body}>
      <Title className={styles.title} title={"Listado de comisiones"} />
      <Button className={styles.addCommission} onClick={() => setOpenCommissionForm(true)}>
        Agregar
      </Button>
      <CommissionsTable className={styles.table} commissions={commissions} />
      <CreateCommissionForm
        isOpen={openCommissionForm}
        onClose={() => setOpenCommissionForm(false)}
      />
    </div>
  </MainContent>
);

interface IComponentProps {
  commissions: ICommission[];
  setOpenCommissionForm: (isOpen: boolean) => void;
  openCommissionForm: boolean;
}
