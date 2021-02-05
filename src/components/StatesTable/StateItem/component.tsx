import React, { FunctionComponent } from "react";
import { useUpdateState } from "$hooks";
import { CreateOrUpdateFormDialog } from "$components/CreateOrUpdateFormDialog";
import { TableRow } from "$components/Table/TableRow";
import { TableItem } from "$components/Table/TableItem";
import { ActionItem } from "$components/Table/ActionItem";
import { IComponentProps } from "./interfaces";

export const StateItem: FunctionComponent<IComponentProps> = ({
  state,
  isOpen,
  setIsOpen,
  readonly
}) => {
  const { updateState } = useUpdateState();

  return (
    <>
      <TableRow>
        <TableItem>{state.name}</TableItem>
        {!readonly && <ActionItem onClick={() => setIsOpen(true)}>Editar</ActionItem>}
      </TableRow>
      {!readonly && (
        <CreateOrUpdateFormDialog
          title="Escriba el nombre del estado"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          withDescription={false}
          initialValues={state}
          update={true}
          createOrUpdate={updateState}
        />
      )}
    </>
  );
};
