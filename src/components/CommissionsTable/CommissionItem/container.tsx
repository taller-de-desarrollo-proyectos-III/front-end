import React, { FunctionComponent, useState } from "react";
import { ICommission } from "$hooks";
import { CommissionItem } from "./component";

export const CommissionItemContainer: FunctionComponent<ICommission> = commission => {
  const [isOpen, setIsOpen] = useState(false);

  return <CommissionItem commission={commission} isOpen={isOpen} setIsOpen={setIsOpen} />;
};
