import React, { FunctionComponent } from "react";
import { EditStateForm } from "$components/EditStateForm";
import { TableRow } from "$components/Table/TableRow";
import { ActionItem } from "$components/Table/ActionItem";
import { IComponentProps } from "./interfaces";

export const StateItem: FunctionComponent<IComponentProps> = ({
  state,
  isOpen,
  setIsOpen,
  readonly
}) => (
  <>
    <TableRow>
      <td>
        <h5>{state.name}</h5>
      </td>
      {!readonly && <ActionItem onClick={() => setIsOpen(true)}>Editar</ActionItem>}
    </TableRow>
    {!readonly && (
      <EditStateForm initialValues={state} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    )}
  </>
);
