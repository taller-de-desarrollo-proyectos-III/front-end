import { FormikHelpers } from "formik";

export interface IContainerProps {
  initialValues: IInitialValues;
  onApplyFilter: (values: IInitialValues) => void;
}

export interface IInitialValues {
  commissionUuids: string[];
}

export interface IComponentProps {
  initialValues: IInitialValues;
  onSubmit: (values: IInitialValues, formikHelpers: FormikHelpers<IInitialValues>) => void;
}
