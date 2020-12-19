import React, { FunctionComponent } from "react";
import { FieldAttributes, useFormikContext } from "formik";
import { IRole, useGetRoles } from "$hooks";
import { Selector } from "$components/Selector";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { FastField } from "formik";
import { IInitialValues } from "$components/VolunteersFilter/interfaces";

export const RoleSelectorContainer: FunctionComponent<FieldAttributes<any>> = ({
  className,
  label,
  ...props
}) => {
  const roles = useGetRoles();
  const { values, setFieldValue } = useFormikContext<IInitialValues>();

  if (roles === undefined) return <LoadingSpinner />;

  const onChange = (selectedRoles: IRole[]) => {
    if (selectedRoles.map(({ uuid }) => uuid).includes("ALL")) {
      return setFieldValue("roleUuids", "ALL");
    }
    setFieldValue(
      "roleUuids",
      selectedRoles.map(({ uuid }) => uuid)
    );
  };

  const isAll = () => values.roleUuids === "ALL";
  const allOption = { uuid: "ALL", name: "TODOS" };
  const selectedOptions = isAll()
    ? [allOption]
    : roles.filter(role => values.roleUuids.includes(role.uuid));

  return (
    <FastField {...props}>
      {() => (
        <Selector
          label={label}
          className={className}
          multiple
          options={roles}
          setSelectedOptions={onChange}
          selectedOptions={selectedOptions}
        />
      )}
    </FastField>
  );
};
