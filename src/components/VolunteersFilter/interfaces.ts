import { FormikHelpers } from "formik";

interface ICommonProps {
  initialValues: IInitialValues;
}

export interface IContainerProps extends Partial<ICommonProps> {
  onApplyFilter: (values: IInitialValues) => void;
}

export interface IInitialValues {
  commissionUuids: string[];
  roleUuids: string[];
}

export interface IComponentProps extends ICommonProps {
  onSubmit: (values: IInitialValues, formikHelpers: FormikHelpers<IInitialValues>) => void;
}
