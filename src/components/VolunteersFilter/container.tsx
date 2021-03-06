import React, { FunctionComponent, Fragment } from "react";
import { VolunteersFilter } from "./component";
import { IContainerProps, IVolunteersFilter } from "./interfaces";
import { FormikHelpers } from "formik/dist/types";

export const VolunteersFilterContainer: FunctionComponent<IContainerProps> = ({
  initialValues,
  onApplyFilter
}) => {
  if (!initialValues) return <Fragment />;

  const onSubmit = (
    values: IVolunteersFilter,
    { setSubmitting }: FormikHelpers<IVolunteersFilter>
  ) => {
    onApplyFilter(values);
    setSubmitting(false);
  };

  return <VolunteersFilter initialValues={initialValues} onSubmit={onSubmit} />;
};
