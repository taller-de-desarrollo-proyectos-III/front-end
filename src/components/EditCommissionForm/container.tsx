import React, { FunctionComponent } from "react";
import { useUpdateCommission, IUseUpdateCommissionVariables } from "$hooks";
import { CommissionForm } from "$components/CommissionForm";

export const EditCommissionFormContainer: FunctionComponent<IContainerProps> = ({
  isOpen,
  onClose,
  initialValues: { uuid, name }
}) => {
  const { updateCommission } = useUpdateCommission();

  const onSubmit = async (values: { name: string }) => {
    await updateCommission({ ...values, uuid });
    onClose();
  };

  return (
    <CommissionForm
      isOpen={isOpen}
      onClose={onClose}
      initialValues={{ name }}
      onSubmit={onSubmit}
    />
  );
};

interface IContainerProps {
  initialValues: IUseUpdateCommissionVariables;
  isOpen: boolean;
  onClose: () => void;
}
