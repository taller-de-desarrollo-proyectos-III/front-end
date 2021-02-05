import React, { FunctionComponent } from "react";
import { useUpdateRole } from "$hooks";
import { CreateOrUpdateFormDialog } from "$components/CreateOrUpdateFormDialog";
import { TableRow } from "$components/Table/TableRow";
import { TableItem } from "$components/Table/TableItem";
import { ActionItem } from "$components/Table/ActionItem";
import { IComponentProps } from "./interfaces";

export const RoleItem: FunctionComponent<IComponentProps> = ({
  role,
  isOpen,
  setIsOpen,
  readonly
}) => {
  const { updateRole } = useUpdateRole();
  return (
    <>
      <TableRow>
        <TableItem>{role.name}</TableItem>
        <TableItem>{role.description || "No tiene"}</TableItem>
        {!readonly && <ActionItem onClick={() => setIsOpen(true)}>Editar</ActionItem>}
      </TableRow>
      {!readonly && (
        <CreateOrUpdateFormDialog
          title="Escriba el nombre y la descripción del rol"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          withDescription
          initialValues={role}
          update={true}
          createOrUpdate={updateRole}
        />
      )}
    </>
  );
};
