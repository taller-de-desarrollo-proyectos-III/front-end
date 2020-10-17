import React, { FunctionComponent, useState } from "react";
import { Home } from "./component";
import { useCreateDummy, IDummy } from "$hooks";

export const HomeContainer: FunctionComponent = () => {
  const [dummy, setDummy] = useState<IDummy | undefined>(undefined);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const { createDummy } = useCreateDummy();

  const onSubmit = async () => {
    setDummy(await createDummy( { welcomeMessage }));
  };

  return (
    <Home
      setWelcomeMessage={setWelcomeMessage}
      dummy={dummy}
      onSubmit={onSubmit}
    />
  );
};
