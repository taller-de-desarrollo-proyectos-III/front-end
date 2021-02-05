import React, { FunctionComponent } from "react";
import { useUpdateCommission } from "$hooks";
import { TableRow } from "$components/Table/TableRow";
import { ActionItem } from "$components/Table/ActionItem";
import { TableItem } from "$components/Table/TableItem";
import { CreateOrUpdateFormDialog } from "$components/CreateOrUpdateFormDialog";
import { IComponentProps } from "./interfaces";

export const CommissionItem: FunctionComponent<IComponentProps> = ({
  commission,
  isOpen,
  setIsOpen,
  readonly
}) => {
  const { updateCommission } = useUpdateCommission();
  return (
    <>
      <TableRow>
        <TableItem>{commission.name}</TableItem>
        <TableItem>{commission.description || "No tiene"}</TableItem>
        {!readonly && <ActionItem onClick={() => setIsOpen(true)}>Editar</ActionItem>}
      </TableRow>
      {!readonly && (
        <CreateOrUpdateFormDialog
          title="Escriba el nombre y la descripción de la comisión"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          withDescription
          initialValues={commission}
          update={true}
          createOrUpdate={updateCommission}
        />
      )}
    </>
  );
};
