import React, { FunctionComponent } from "react";
import { EditCommissionForm } from "$components/EditCommissionForm";
import { TableRow } from "$components/Table/TableRow";
import { ActionItem } from "$components/Table/ActionItem";
import { TableItem } from "$components/Table/TableItem";
import { IComponentProps } from "./interfaces";

export const CommissionItem: FunctionComponent<IComponentProps> = ({
  commission,
  isOpen,
  setIsOpen,
  readonly
}) => (
  <>
    <TableRow>
      <TableItem>{commission.name}</TableItem>
      <TableItem>{commission.description}</TableItem>
      {!readonly && <ActionItem onClick={() => setIsOpen(true)}>Editar</ActionItem>}
    </TableRow>
    {!readonly && (
      <EditCommissionForm
        initialValues={commission}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    )}
  </>
);
