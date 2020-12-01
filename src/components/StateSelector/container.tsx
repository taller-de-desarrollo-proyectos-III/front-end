import React, { ChangeEvent, FunctionComponent } from "react";
import { FieldAttributes, useFormikContext } from "formik";
import { useGetStates } from "$hooks";
import { StateSelector } from "./component";

export const StateSelectorContainer: FunctionComponent<FieldAttributes<any>> = props => {
  const states = useGetStates();
  const { setFieldValue } = useFormikContext();
  const onChange = (event: ChangeEvent<{ value: string[] }>) => {
    setFieldValue(props.name, event.target.value);
  };

  return <StateSelector onChange={onChange} states={states} {...props} />;
};
