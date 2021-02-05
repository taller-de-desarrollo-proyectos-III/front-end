import React, { FunctionComponent } from "react";
import { DialogForm, IValues } from "$components/DialogForm";

export const RoleForm: FunctionComponent<IConfirmDialogProps> = ({
  isOpen,
  onClose,
  initialValues,
  onSubmit
}) => (
  <DialogForm
    withDescription
    title="Escriba el nombre y la descripción del rol"
    isOpen={isOpen}
    onClose={onClose}
    initialValues={initialValues}
    onSubmit={onSubmit}
  />
);

interface IConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  initialValues: IValues;
  onSubmit: (values: IValues) => void;
}
