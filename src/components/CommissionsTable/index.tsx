import React, { FunctionComponent } from "react";
import { ICommission } from "$hooks";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Table } from "$components/Table";
import { TableHeader } from "$components/Table/TableHeader";
import { TableBody } from "$components/Table/TableBody";
import { TableItem } from "$components/Table/TableItem";
import { CommissionItem } from "./CommissionItem";

export const CommissionsTable: FunctionComponent<IComponentProps> = ({
  commissions,
  className,
  readonly
}) => (
  <Table className={className}>
    <TableHeader>
      <TableItem>NOMBRE</TableItem>
      {!readonly && <TableItem />}
    </TableHeader>
    <TableBody>
      {!commissions && <LoadingSpinner />}
      {commissions &&
        commissions.map(commission => (
          <CommissionItem readonly={readonly} key={commission.uuid} commission={commission} />
        ))}
    </TableBody>
  </Table>
);

interface IComponentProps {
  readonly?: boolean;
  className?: string;
  commissions?: ICommission[];
}
