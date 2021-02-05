import React, { FunctionComponent } from "react";
import { ICommission, useCreateCommission } from "$hooks";
import { CommissionsTable } from "$components/CommissionsTable";
import { NavBar } from "$components/NavBar";
import { Title } from "$components/Title";
import { MainContent } from "$components/MainContent";
import { Button } from "$components/Button";
import { CreateOrUpdateFormDialog } from "$components/CreateOrUpdateFormDialog";
import styles from "./styles.module.scss";

export const Commissions: FunctionComponent<IComponentProps> = ({
  commissions,
  setOpenCommissionForm,
  openCommissionForm
}) => {
  const { createCommission } = useCreateCommission();

  return (
    <MainContent>
      <NavBar />
      <div className={styles.body}>
        <Title className={styles.title} title={"Listado de comisiones"} />
        <Button className={styles.addCommission} onClick={() => setOpenCommissionForm(true)}>
          Agregar
        </Button>
        <CommissionsTable className={styles.table} commissions={commissions} />
        <CreateOrUpdateFormDialog
          title="Escriba el nombre y la descripción de la comisión"
          isOpen={openCommissionForm}
          onClose={() => setOpenCommissionForm(false)}
          withDescription
          initialValues={{ name: "", description: "" }}
          update={false}
          createOrUpdate={createCommission}
        />
      </div>
    </MainContent>
  );
};

interface IComponentProps {
  commissions?: ICommission[];
  setOpenCommissionForm: (isOpen: boolean) => void;
  openCommissionForm: boolean;
}
