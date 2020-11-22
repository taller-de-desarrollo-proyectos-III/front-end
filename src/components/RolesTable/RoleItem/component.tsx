import React, { FunctionComponent } from "react";
import { EditRoleForm } from "$components/EditRoleForm";
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
    <TableItem>
      <td>
        <h5>{role.name}</h5>
      </td>
      {!readonly && <ActionItem onClick={() => setIsOpen(true)}>Editar</ActionItem>}
    </TableItem>
    {!readonly && (
      <EditRoleForm initialValues={role} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    )}
  </>
);
