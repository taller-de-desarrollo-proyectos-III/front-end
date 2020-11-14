import React, { FunctionComponent } from "react";
import { ICommission } from "$hooks";
import { Table } from "$components/Table";
import { TableHeader } from "$components/Table/TableHeader";
import { TableBody } from "$components/Table/TableBody";
import { CommissionItem } from "./CommissionItem";

export const CommissionsTable: FunctionComponent<IComponentProps> = ({
  commissions,
  className,
  readonly
}) => (
  <Table className={className}>
    <TableHeader>
      <th>NOMBRE</th>
      {!readonly && <th />}
    </TableHeader>
    <TableBody>
      {commissions.map(commission => (
        <CommissionItem readonly={readonly} key={commission.uuid} commission={commission} />
      ))}
    </TableBody>
  </Table>
);

interface IComponentProps {
  readonly?: boolean;
  className?: string;
  commissions: ICommission[];
}
