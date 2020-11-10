import React, { FunctionComponent } from "react";
import { ICommission } from "$hooks";
import { TableItem } from "$components/TableItem";

export const CommissionItem: FunctionComponent<ICommission> = ({ name }) => {
  return (
    <TableItem>
      <td>
        <h5>{name}</h5>
      </td>
      <td />
    </TableItem>
  );
};
