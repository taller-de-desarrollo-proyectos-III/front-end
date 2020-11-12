import React, { FunctionComponent } from "react";
import { ICommission } from "$hooks";
import { EditCommissionForm } from "$components/EditCommissionForm";
import { TableItem } from "$components/Table/TableItem";
import { ActionItem } from "$components/Table/ActionItem";

export const CommissionItem: FunctionComponent<IComponentProps> = ({
  commission,
  isOpen,
  setIsOpen
}) => (
  <>
    <TableItem>
      <td>
        <h5>{commission.name}</h5>
      </td>
      <ActionItem onClick={() => setIsOpen(true)}>Editar</ActionItem>
    </TableItem>
    <EditCommissionForm
      initialValues={commission}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    />
  </>
);

interface IComponentProps {
  commission: ICommission;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
