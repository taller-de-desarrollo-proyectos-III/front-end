import React, { FunctionComponent } from "react";
import { DialogForm } from "$components/DialogForm";

export const StateForm: FunctionComponent<IConfirmDialogProps> = ({
  isOpen,
  onClose,
  initialValues,
  onSubmit
}) => (
  <DialogForm
    withDescription={false}
    title="Escriba el nombre del estado"
    isOpen={isOpen}
    onClose={onClose}
    initialValues={initialValues}
    onSubmit={onSubmit}
  />
);

interface IConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  initialValues: { name: string };
  onSubmit: (values: { name: string }) => void;
}
