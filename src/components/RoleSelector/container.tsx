import React from "react";
import { FieldAttributes, useFormikContext } from "formik";
import { IRole, useGetRoles } from "$hooks";
import { Selector } from "$components/Selector";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { FastField } from "formik";
import { get } from "lodash";

export const RoleSelectorContainer = <Values extends object>({
  className,
  label,
  name,
  ...props
}: FieldAttributes<any>) => {
  const roles = useGetRoles();
  const { values, setFieldValue } = useFormikContext<Values>();

  if (roles === undefined) return <LoadingSpinner />;

  const onChange = (selectedRoles: IRole[]) => {
    if (selectedRoles.map(({ uuid }) => uuid).includes("ALL")) return setFieldValue(name, "ALL");
    setFieldValue(
      name,
      selectedRoles.map(({ uuid }) => uuid)
    );
  };

  const isAll = () => get(values, name) === "ALL";
  const allOption = { uuid: "ALL", name: "TODOS" };
  const selectedOptions = isAll()
    ? [allOption]
    : roles.filter(role => get(values, name).includes(role.uuid));

  return (
    <FastField name={name} {...props}>
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
