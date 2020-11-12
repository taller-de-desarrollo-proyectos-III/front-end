import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useUpdateCommission, IUseUpdateCommissionVariables } from "$hooks";
import { CommissionForm } from "$components/CommissionForm";
import { RoutesBuilder } from "$models";

export const EditCommissionFormContainer: FunctionComponent<IContainerProps> = ({
  isOpen,
  onClose,
  initialValues: { uuid, name }
}) => {
  const { updateCommission } = useUpdateCommission();
  const history = useHistory();

  const onSubmit = async (values: { name: string }) => {
    await updateCommission({ ...values, uuid });
    redirectToCommissionsList();
  };

  const redirectToCommissionsList = () => {
    history.push(RoutesBuilder.commissions.list());
    onClose();
  };

  return (
    <CommissionForm
      isOpen={isOpen}
      onClose={redirectToCommissionsList}
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
