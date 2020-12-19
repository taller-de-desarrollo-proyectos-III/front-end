import React, { FunctionComponent } from "react";
import { FieldAttributes, useFormikContext } from "formik";
import { useGetCommissions, ICommission } from "$hooks";
import { IInitialValues } from "$components/VolunteersFilter/interfaces";
import { Selector } from "$components/Selector";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { FastField } from "formik";

export const CommissionSelectorContainer: FunctionComponent<FieldAttributes<any>> = ({
  className,
  label,
  ...props
}) => {
  const commissions = useGetCommissions();
  const { values, setFieldValue } = useFormikContext<IInitialValues>();
  if (!commissions) return <LoadingSpinner />;

  const onChange = (selectedCommissions: ICommission[]) => {
    if (selectedCommissions.map(({ uuid }) => uuid).includes("ALL")) {
      return setFieldValue("commissionUuids", "ALL");
    }
    setFieldValue(
      "commissionUuids",
      selectedCommissions.map(({ uuid }) => uuid)
    );
  };

  const isAll = () => values.commissionUuids === "ALL";
  const allOption = { uuid: "ALL", name: "TODOS", description: "Todas las comisiones" };
  const selectedOptions = isAll()
    ? [allOption]
    : commissions.filter(commission => values.commissionUuids.includes(commission.uuid));

  return (
    <FastField {...props}>
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
