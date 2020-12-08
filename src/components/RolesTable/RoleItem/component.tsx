import React, { FunctionComponent } from "react";
import { EditRoleForm } from "$components/EditRoleForm";
import { TableRow } from "$components/Table/TableRow";
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
      <td>
        <h5>{role.name}</h5>
      </td>
      {!readonly && <ActionItem onClick={() => setIsOpen(true)}>Editar</ActionItem>}
    </TableRow>
    {!readonly && (
      <EditRoleForm initialValues={role} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    )}
  </>
);
