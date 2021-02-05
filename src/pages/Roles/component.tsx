import React, { FunctionComponent } from "react";
import { IRole, useCreateRole } from "$hooks";
import { RolesTable } from "$components/RolesTable";
import { NavBar } from "$components/NavBar";
import { Title } from "$components/Title";
import { MainContent } from "$components/MainContent";
import { Button } from "$components/Button";
import { CreateOrUpdateFormDialog } from "$components/CreateOrUpdateFormDialog";
import styles from "./styles.module.scss";

export const Roles: FunctionComponent<IComponentProps> = ({
  roles,
  setOpenRoleForm,
  openRoleForm
}) => {
  const { createRole } = useCreateRole();

  return (
    <MainContent>
      <NavBar />
      <div className={styles.body}>
        <Title className={styles.title} title={"Listado de roles"} />
        <Button className={styles.addRole} onClick={() => setOpenRoleForm(true)}>
          Agregar
        </Button>
        <RolesTable className={styles.table} roles={roles} />
        <CreateOrUpdateFormDialog
          title="Escriba el nombre y la descripción del rol"
          isOpen={openRoleForm}
          onClose={() => setOpenRoleForm(false)}
          withDescription
          initialValues={{ name: "", description: "" }}
          update={false}
          createOrUpdate={createRole}
        />
      </div>
    </MainContent>
  );
};

interface IComponentProps {
  roles?: IRole[];
  setOpenRoleForm: (isOpen: boolean) => void;
  openRoleForm: boolean;
}
