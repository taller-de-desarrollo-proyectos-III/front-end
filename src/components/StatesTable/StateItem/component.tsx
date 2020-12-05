import React, { FunctionComponent } from "react";
import { EditStateForm } from "$components/EditStateForm";
import { TableItem } from "$components/Table/TableItem";
import { ActionItem } from "$components/Table/ActionItem";
import { IComponentProps } from "./interfaces";

export const StateItem: FunctionComponent<IComponentProps> = ({
  state,
  isOpen,
  setIsOpen,
  readonly
}) => (
  <>
    <TableItem>
      <td>
        <h5>{state.name}</h5>
      </td>
      {!readonly && <ActionItem onClick={() => setIsOpen(true)}>Editar</ActionItem>}
    </TableItem>
    {!readonly && (
      <EditStateForm initialValues={state} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    )}
  </>
);
