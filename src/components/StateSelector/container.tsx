import React, { FunctionComponent } from "react";
import { FieldAttributes, useFormikContext } from "formik";
import { IState, useGetStates } from "$hooks";
import { Selector } from "$components/Selector";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { FastField } from "formik";
import { IInitialValues } from "$components/VolunteersFilter/interfaces";

export const StateSelectorContainer: FunctionComponent<IContainerProps> = ({
  className,
  label,
  multiple,
  ...props
}) => {
  const states = useGetStates();
  const { values, setFieldValue } = useFormikContext<IInitialValues>();

  if (states === undefined) return <LoadingSpinner />;

  const onChange = (selectedStates: IState[]) => {
    if (!multiple) {
      if (selectedStates.length > 0) return setFieldValue("stateUuid", selectedStates[0].uuid);
      setFieldValue("stateUuid", null);
    } else {
      if (selectedStates.map(({ uuid }) => uuid).includes("ALL")) {
        return setFieldValue("stateUuids", "ALL");
      }
      setFieldValue(
        "stateUuids",
        selectedStates.map(({ uuid }) => uuid)
      );
    }
  };

  const isAll = () => values.stateUuids === "ALL";
  const allOption = { uuid: "ALL", name: "TODOS", description: "Todos los estados" };
  const selectedOption = () => {
    if (!multiple) return states.filter(state => state.uuid === values.stateUuids);
    if (isAll()) return [allOption];
    return states.filter(state => values.stateUuids.includes(state.uuid));
  };

  return (
    <FastField {...props}>
      {() => (
        <Selector
          label={label}
          className={className}
          multiple={multiple}
          options={states}
          setSelectedOptions={onChange}
          selectedOptions={selectedOption()}
        />
      )}
    </FastField>
  );
};

interface IContainerProps extends FieldAttributes<any> {
  multiple?: boolean;
}
