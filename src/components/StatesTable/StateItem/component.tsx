import React, { FunctionComponent } from "react";
import { EditStateForm } from "$components/EditStateForm";
import { TableRow } from "$components/Table/TableRow";
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
    <TableRow>
      <TableItem>{state.name}</TableItem>
      {!readonly && <ActionItem onClick={() => setIsOpen(true)}>Editar</ActionItem>}
    </TableRow>
    {!readonly && (
      <EditStateForm initialValues={state} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    )}
  </>
);
