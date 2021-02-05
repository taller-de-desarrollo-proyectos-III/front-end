import React, { FunctionComponent } from "react";
import { DialogForm, IValues } from "../DialogForm";

export const CommissionForm: FunctionComponent<IConfirmDialogProps> = ({
  isOpen,
  onClose,
  initialValues,
  onSubmit
}) => (
  <DialogForm
    withDescription
    title="Escriba el nombre y la descripción de la comisión"
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
