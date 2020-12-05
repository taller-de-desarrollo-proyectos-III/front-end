import React, { FunctionComponent, useState } from "react";
import { useGetStates } from "$hooks";
import { States } from "./component";

export const StatesContainer: FunctionComponent = () => {
  const [openStateForm, setOpenStateForm] = useState(false);
  const states = useGetStates([openStateForm]);

  return (
    <States states={states} setOpenStateForm={setOpenStateForm} openStateForm={openStateForm} />
  );
};
