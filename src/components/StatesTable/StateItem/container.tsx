import React, { FunctionComponent, useState } from "react";
import { StateItem } from "./component";
import { IContainerProps } from "./interfaces";

export const StateItemContainer: FunctionComponent<IContainerProps> = props => {
  const [isOpen, setIsOpen] = useState(false);

  return <StateItem {...props} isOpen={isOpen} setIsOpen={setIsOpen} />;
};
