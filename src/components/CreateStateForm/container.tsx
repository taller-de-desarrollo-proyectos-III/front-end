import React, { FunctionComponent } from "react";
import { useCreateState } from "$hooks";
import { StateForm } from "$components/StateForm";

export const CreateStateFormContainer: FunctionComponent<IContainerProps> = ({
  isOpen,
  onClose
}) => {
  const { createState } = useCreateState();

  const onSubmit = async ({ name }: { name: string }) => {
    await createState({ name });
    onClose();
  };

  return (
    <StateForm isOpen={isOpen} onClose={onClose} initialValues={{ name: "" }} onSubmit={onSubmit} />
  );
};

interface IContainerProps {
  isOpen: boolean;
  onClose: () => void;
}
