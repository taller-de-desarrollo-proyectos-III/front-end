import { FormikHelpers } from "formik";

interface ICommonProps {
  initialValues: IVolunteersFilter;
}

export interface IContainerProps extends ICommonProps {
  onApplyFilter: (values: IVolunteersFilter) => void;
}

export type TRoleUuids = string[] | "ALL";
export type TCommissionUuids = string[] | "ALL";
export type TStateUuids = string[] | "ALL";

export interface IVolunteersFilter {
  commissionUuids: TCommissionUuids;
  roleUuids: TRoleUuids;
  stateUuids: TStateUuids;
}

export interface IComponentProps extends ICommonProps {
  onSubmit: (values: IVolunteersFilter, formikHelpers: FormikHelpers<IVolunteersFilter>) => void;
}
