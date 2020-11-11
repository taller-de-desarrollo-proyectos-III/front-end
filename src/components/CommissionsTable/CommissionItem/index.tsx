import React, { FunctionComponent } from "react";
import { ICommission } from "$hooks";
import { TableItem } from "$components/Table/TableItem";
import { ActionItem } from "$components/Table/ActionItem";

export const CommissionItem: FunctionComponent<ICommission> = ({ name }) => (
  <TableItem>
    <td>
      <h5>{name}</h5>
    </td>
    <ActionItem onClick={() => alert("coming soon")}>Editar</ActionItem>
  </TableItem>
);
