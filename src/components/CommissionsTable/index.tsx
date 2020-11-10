import React, { FunctionComponent } from "react";
import { ICommission } from "$hooks";
import { Table } from "$components/Table";
import { TableHeader } from "$components/Table/TableHeader";
import { CommissionItem } from "./CommissionItem";

export const CommissionsTable: FunctionComponent<IComponentProps> = ({ commissions }) => (
  <Table
    body={
      <>
        {commissions.map(item => (
          <CommissionItem key={item.uuid} {...item} />
        ))}
      </>
    }
  >
    <TableHeader>
      <th>NOMBRE</th>
      <th />
    </TableHeader>
  </Table>
);

interface IComponentProps {
  commissions: ICommission[];
}
