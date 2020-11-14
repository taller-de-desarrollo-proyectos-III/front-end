import React, { FunctionComponent } from "react";
import { EditCommissionForm } from "$components/EditCommissionForm";
import { TableItem } from "$components/Table/TableItem";
import { ActionItem } from "$components/Table/ActionItem";
import { IComponentProps } from "./interfaces";

export const CommissionItem: FunctionComponent<IComponentProps> = ({
  commission,
  isOpen,
  setIsOpen,
  readonly
}) => (
  <>
    <TableItem>
      <td>
        <h5>{commission.name}</h5>
      </td>
      {!readonly && <ActionItem onClick={() => setIsOpen(true)}>Editar</ActionItem>}
    </TableItem>
    {!readonly && (
      <EditCommissionForm
        initialValues={commission}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    )}
  </>
);
