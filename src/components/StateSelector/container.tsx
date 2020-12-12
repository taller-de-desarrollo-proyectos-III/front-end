import React, { FunctionComponent } from "react";
import { FieldAttributes, useFormikContext } from "formik";
import { IState, useGetStates } from "$hooks";
import { Selector } from "$components/Selector";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { FastField } from "formik";
import { IInitialValues } from "$components/VolunteersFilter/interfaces";

export const StateSelectorContainer: FunctionComponent<FieldAttributes<any>> = ({
  className,
  label,
  ...props
}) => {
  const states = useGetStates();
  const { values, setFieldValue } = useFormikContext<IInitialValues>();

  if (states === undefined) return <LoadingSpinner />;

  const onChange = (selectedStates: IState[]) => {
    let selectedState = null;
    if (selectedStates.length > 0) selectedState = selectedStates[0].uuid;
    setFieldValue("stateUuid", selectedState);
  };

  const selectedOption = states.filter(state => state.uuid !== values.stateUuid);

  return (
    <FastField {...props}>
      {() => (
        <Selector
          label={label}
          className={className}
          multiple={false}
          options={states}
          setSelectedOptions={onChange}
          selectedOptions={selectedOption}
        />
      )}
    </FastField>
  );
};
