import { FormikHelpers } from "formik";

interface ICommonProps {
  initialValues: IInitialValues;
}

export interface IContainerProps extends ICommonProps {
  onApplyFilter: (values: IInitialValues) => void;
}

export type TRoleUuids = string[] | "ALL";
export type TCommissionUuids = string[] | "ALL";

export interface IInitialValues {
  commissionUuids: TCommissionUuids;
  roleUuids: TRoleUuids;
  stateUuid: string;
}

export interface IComponentProps extends ICommonProps {
  onSubmit: (values: IInitialValues, formikHelpers: FormikHelpers<IInitialValues>) => void;
}
