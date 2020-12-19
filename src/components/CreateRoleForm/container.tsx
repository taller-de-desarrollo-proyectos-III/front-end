import React, { FunctionComponent } from "react";
import { useCreateRole } from "$hooks";
import { RoleForm } from "$components/RoleForm";

export const CreateRoleFormContainer: FunctionComponent<IContainerProps> = ({
  isOpen,
  onClose
}) => {
  const { createRole } = useCreateRole();

  const onSubmit = async ({ name, description }: { name: string; description: string }) => {
    await createRole({ name, description });
    onClose();
  };

  return (
    <RoleForm
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
