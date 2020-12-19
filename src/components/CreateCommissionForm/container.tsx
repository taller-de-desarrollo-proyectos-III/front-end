import React, { FunctionComponent } from "react";
import { useCreateCommission } from "$hooks";
import { CommissionForm } from "$components/CommissionForm";

export const CreateCommissionFormContainer: FunctionComponent<IContainerProps> = ({
  isOpen,
  onClose
}) => {
  const { createCommission } = useCreateCommission();

  const onSubmit = async ({ name, description }: { name: string; description?: string }) => {
    await createCommission({ name, description });
    onClose();
  };

  return (
    <CommissionForm
      isOpen={isOpen}
      onClose={onClose}
      initialValues={{ name: "", description: "" }}
      onSubmit={onSubmit}
    />
  );
};

interface IContainerProps {
  isOpen: boolean;
  onClose: () => void;
}
