import React, { FunctionComponent } from "react";
import { EditCommissionForm } from "$components/EditCommissionForm";
import { TableRow } from "$components/Table/TableRow";
import { ActionItem } from "$components/Table/ActionItem";
import { IComponentProps } from "./interfaces";

export const CommissionItem: FunctionComponent<IComponentProps> = ({
  commission,
  isOpen,
  setIsOpen,
  readonly
}) => (
  <>
    <TableRow>
      <td>
        <h5>{commission.name}</h5>
      </td>
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
