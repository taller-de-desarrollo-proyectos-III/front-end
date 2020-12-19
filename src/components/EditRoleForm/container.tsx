import React, { FunctionComponent } from "react";
import { useUpdateRole, IUseUpdateRoleVariables } from "$hooks";
import { RoleForm } from "$components/RoleForm";

export const EditRoleFormContainer: FunctionComponent<IContainerProps> = ({
  isOpen,
  onClose,
  initialValues: { uuid, name, description }
}) => {
  const { updateRole } = useUpdateRole();

  const onSubmit = async (values: { name: string; description: string }) => {
    await updateRole({ ...values, uuid });
    onClose();
  };

  return (
    <RoleForm
      isOpen={isOpen}
      onClose={onClose}
      initialValues={{ name, description }}
      onSubmit={onSubmit}
    />
  );
};

interface IContainerProps {
  initialValues: IUseUpdateRoleVariables;
  isOpen: boolean;
  onClose: () => void;
}
