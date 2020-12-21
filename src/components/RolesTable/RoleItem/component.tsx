import React, { FunctionComponent } from "react";
import { EditRoleForm } from "$components/EditRoleForm";
import { TableRow } from "$components/Table/TableRow";
import { TableItem } from "$components/Table/TableItem";
import { ActionItem } from "$components/Table/ActionItem";
import { IComponentProps } from "./interfaces";

export const RoleItem: FunctionComponent<IComponentProps> = ({
  role,
  isOpen,
  setIsOpen,
  readonly
}) => (
  <>
    <TableRow>
      <TableItem>{role.name}</TableItem>
      <TableItem>{role.description || "No tiene"}</TableItem>
      {!readonly && <ActionItem onClick={() => setIsOpen(true)}>Editar</ActionItem>}
    </TableRow>
    {!readonly && (
      <EditRoleForm initialValues={role} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    )}
  </>
);
