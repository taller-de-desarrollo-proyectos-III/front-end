import React, { FunctionComponent, useState } from "react";
import { RoleItem } from "./component";
import { IContainerProps } from "./interfaces";

export const RoleItemContainer: FunctionComponent<IContainerProps> = props => {
  const [isOpen, setIsOpen] = useState(false);

  return <RoleItem {...props} isOpen={isOpen} setIsOpen={setIsOpen} />;
};
