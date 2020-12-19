import React from "react";
import { FieldAttributes, useFormikContext } from "formik";
import { IState, useGetStates } from "$hooks";
import { Selector } from "$components/Selector";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { FastField } from "formik";
import { get } from "lodash";

export const StateSelectorContainer = <Values extends object>({
  className,
  label,
  multiple,
  name,
  ...props
}: IContainerProps) => {
  const states = useGetStates();
  const { values, setFieldValue } = useFormikContext<Values>();

  if (states === undefined) return <LoadingSpinner />;

  const onChange = (selectedStates: IState[]) => {
    if (!multiple) {
      if (selectedStates.length > 0) return setFieldValue(name, selectedStates[0].uuid);
      setFieldValue(name, null);
    } else {
      if (selectedStates.map(({ uuid }) => uuid).includes("ALL")) {
        return setFieldValue(name, "ALL");
      }
      setFieldValue(
        name,
        selectedStates.map(({ uuid }) => uuid)
      );
    }
  };

  const isAll = () => get(values, name) === "ALL";
  const allOption = { uuid: "ALL", name: "TODOS" };
  const selectedOption = () => {
    if (!multiple) return states.filter(state => state.uuid === get(values, name));
    if (isAll()) return [allOption];
    return states.filter(state => get(values, name).includes(state.uuid));
  };

  return (
    <FastField name={name} {...props}>
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
