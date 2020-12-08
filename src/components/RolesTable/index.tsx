import React, { FunctionComponent } from "react";
import { IRole } from "$hooks";
import { Table } from "$components/Table";
import { TableHeader } from "$components/Table/TableHeader";
import { TableBody } from "$components/Table/TableBody";
import { TableItem } from "$components/Table/TableItem";
import { RoleItem } from "./RoleItem";

export const RolesTable: FunctionComponent<IComponentProps> = ({ roles, className, readonly }) => (
  <Table className={className}>
    <TableHeader>
      <TableItem>NOMBRE</TableItem>
      {!readonly && <TableItem />}
    </TableHeader>
    <TableBody>
      {roles.map(role => (
        <RoleItem readonly={readonly} key={role.uuid} role={role} />
      ))}
    </TableBody>
  </Table>
);

interface IComponentProps {
  readonly?: boolean;
  className?: string;
  roles: IRole[];
}
