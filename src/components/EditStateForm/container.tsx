import React, { FunctionComponent } from "react";
import { useUpdateState, IUseUpdateStateVariables } from "$hooks";
import { StateForm } from "$components/StateForm";

export const EditStateFormContainer: FunctionComponent<IContainerProps> = ({
  isOpen,
  onClose,
  initialValues: { uuid, name }
}) => {
  const { updateState } = useUpdateState();

  const onSubmit = async (values: { name: string }) => {
    await updateState({ ...values, uuid });
    onClose();
  };

  return (
    <StateForm isOpen={isOpen} onClose={onClose} initialValues={{ name }} onSubmit={onSubmit} />
  );
};

interface IContainerProps {
  initialValues: IUseUpdateStateVariables;
  isOpen: boolean;
  onClose: () => void;
}
