import React, { FunctionComponent } from "react";
import { ICommission } from "$hooks";
import { Table } from "$components/Table";
import { TableHeader } from "$components/Table/TableHeader";
import { TableBody } from "$components/Table/TableBody";
import { CommissionItem } from "./CommissionItem";

export const CommissionsTable: FunctionComponent<IComponentProps> = ({
  commissions,
  className
}) => (
  <Table className={className}>
    <TableHeader>
      <th>NOMBRE</th>
      <th />
    </TableHeader>
    <TableBody>
      {commissions.map(item => (
        <CommissionItem key={item.uuid} {...item} />
      ))}
    </TableBody>
  </Table>
);

interface IComponentProps {
  className?: string;
  commissions: ICommission[];
}
