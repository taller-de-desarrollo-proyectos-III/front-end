import React, { FunctionComponent, useState } from "react";
import { CommissionItem } from "./component";
import { IContainerProps } from "./interfaces";

export const CommissionItemContainer: FunctionComponent<IContainerProps> = props => {
  const [isOpen, setIsOpen] = useState(false);

  return <CommissionItem {...props} isOpen={isOpen} setIsOpen={setIsOpen} />;
};
