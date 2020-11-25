import React, { ChangeEvent, FunctionComponent } from "react";
import { FieldAttributes, useFormikContext } from "formik";
import { useGetRoles } from "$hooks";
import { RoleSelector } from "./component";

export const RoleSelectorContainer: FunctionComponent<FieldAttributes<any>> = props => {
  const roles = useGetRoles();
  const { setFieldValue } = useFormikContext();
  const onChange = (event: ChangeEvent<{ value: string[] }>) => {
    setFieldValue(props.name, event.target.value);
  };

  return <RoleSelector onChange={onChange} roles={roles} {...props} />;
};
