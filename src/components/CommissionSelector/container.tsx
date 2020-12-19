import React from "react";
import { FieldAttributes, useFormikContext } from "formik";
import { useGetCommissions, ICommission } from "$hooks";
import { IInitialValues } from "$components/VolunteersFilter/interfaces";
import { Selector } from "$components/Selector";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { FastField } from "formik";
import { get } from "lodash";

export const CommissionSelectorContainer = ({
  className,
  label,
  name,
  ...props
}: FieldAttributes<any>) => {
  const commissions = useGetCommissions();
  const { values, setFieldValue } = useFormikContext<IInitialValues>();
  if (!commissions) return <LoadingSpinner />;

  const onChange = (selectedCommissions: ICommission[]) => {
    if (selectedCommissions.map(({ uuid }) => uuid).includes("ALL")) {
      return setFieldValue(name, "ALL");
    }
    setFieldValue(
      name,
      selectedCommissions.map(({ uuid }) => uuid)
    );
  };

  const isAll = () => get(values, name) === "ALL";
  const allOption = { uuid: "ALL", name: "TODOS" };
  const selectedOptions = isAll()
    ? [allOption]
    : commissions.filter(commission => get(values, name).includes(commission.uuid));

  return (
    <FastField name={name} {...props}>
      {() => (
        <Selector
          label={label}
          className={className}
          multiple
          options={commissions}
          setSelectedOptions={onChange}
          selectedOptions={selectedOptions}
        />
      )}
    </FastField>
  );
};
