import React, { FunctionComponent } from "react";
import { VolunteersFilter } from "./component";
import { IContainerProps, IInitialValues } from "./interfaces";
import { FormikHelpers } from "formik/dist/types";

export const VolunteersFilterContainer: FunctionComponent<IContainerProps> = ({
  initialValues,
  onApplyFilter
}) => {
  const onSubmit = (
    { commissionUuids }: IInitialValues,
    { setSubmitting }: FormikHelpers<IInitialValues>
  ) => {
    onApplyFilter({ commissionUuids });
    setSubmitting(false);
  };

  return <VolunteersFilter initialValues={initialValues} onSubmit={onSubmit} />;
};
