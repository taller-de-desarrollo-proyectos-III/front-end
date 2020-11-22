import React, { FunctionComponent } from "react";
import { IRole } from "$hooks";
import { RolesTable } from "$components/RolesTable";
import { NavBar } from "$components/NavBar";
import { Title } from "$components/Title";
import { MainContent } from "$components/MainContent";
import { Button } from "$components/Button";
import { CreateRoleForm } from "$components/CreateRoleForm";
import styles from "./styles.module.scss";

export const Roles: FunctionComponent<IComponentProps> = ({
  roles,
  setOpenRoleForm,
  openRoleForm
}) => (
  <MainContent>
    <NavBar />
    <div className={styles.body}>
      <Title className={styles.title} title={"Listado de roles"} />
      <Button className={styles.addRole} onClick={() => setOpenRoleForm(true)}>
        Agregar
      </Button>
      <RolesTable className={styles.table} roles={roles} />
      <CreateRoleForm isOpen={openRoleForm} onClose={() => setOpenRoleForm(false)} />
    </div>
  </MainContent>
);

interface IComponentProps {
  roles: IRole[];
  setOpenRoleForm: (isOpen: boolean) => void;
  openRoleForm: boolean;
}
