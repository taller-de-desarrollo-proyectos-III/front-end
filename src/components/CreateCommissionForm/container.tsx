import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useCreateCommission } from "$hooks";
import { CommissionForm } from "$components/CommissionForm";
import { RoutesBuilder } from "$models";

export const CreateCommissionFormContainer: FunctionComponent<IContainerProps> = ({
  isOpen,
  onClose
}) => {
  const { createCommission } = useCreateCommission();
  const history = useHistory();

  const onSubmit = async ({ name }: { name: string }) => {
    await createCommission({ name });
    redirectToCommissionsList();
  };

  const redirectToCommissionsList = () => {
    history.push(RoutesBuilder.commissions.list());
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
