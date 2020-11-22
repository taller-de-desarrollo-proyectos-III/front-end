import React, { FunctionComponent } from "react";
import { useCreateRole } from "$hooks";
import { RoleForm } from "$components/RoleForm";

export const CreateRoleFormContainer: FunctionComponent<IContainerProps> = ({
  isOpen,
  onClose
}) => {
  const { createRole } = useCreateRole();

  const onSubmit = async ({ name }: { name: string }) => {
    await createRole({ name });
    onClose();
  };

  return (
    <RoleForm isOpen={isOpen} onClose={onClose} initialValues={{ name: "" }} onSubmit={onSubmit} />
  );
};

interface IContainerProps {
  isOpen: boolean;
  onClose: () => void;
}
