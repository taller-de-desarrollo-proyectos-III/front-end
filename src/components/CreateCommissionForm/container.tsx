import React, { FunctionComponent } from "react";
import { useCreateCommission } from "$hooks";
import { CommissionForm } from "$components/CommissionForm";

export const CreateCommissionFormContainer: FunctionComponent<IContainerProps> = ({
  isOpen,
  onClose
}) => {
  const { createCommission } = useCreateCommission();

  const onSubmit = async ({ name }: { name: string }) => {
    await createCommission({ name });
    onClose();
  };

  return (
    <CommissionForm
      isOpen={isOpen}
      onClose={onClose}
      initialValues={{ name: "" }}
      onSubmit={onSubmit}
    />
  );
};

interface IContainerProps {
  isOpen: boolean;
  onClose: () => void;
}
