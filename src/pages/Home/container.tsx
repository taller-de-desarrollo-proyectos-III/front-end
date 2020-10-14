import React, { FunctionComponent, useState } from "react";
import { Home } from "./component";
import { useCreateDummy } from "../../hooks";

export const HomeContainer: FunctionComponent = () => {
  const [dummy, setDummy] = useState({ uuid: "", welcomeMessage: "" });
  const { createDummy } = useCreateDummy();

  const onClick = async () => {
    setDummy(await createDummy( { welcomeMessage: "hello" }));
  };

  return (
    <Home
      dummy={dummy}
      onClick={onClick}
    />
  );
};
