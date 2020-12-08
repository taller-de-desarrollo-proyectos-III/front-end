import React, { FunctionComponent } from "react";
import { IVolunteer } from "$hooks";
import { VolunteerItem } from "./VolunteerItem";
import { Table } from "$components/Table";
import { TableHeader } from "$components/Table/TableHeader";
import { TableBody } from "$components/Table/TableBody";
import { TableItem } from "$components/Table/TableItem";

export const VolunteersTable: FunctionComponent<VolunteersProps> = ({ volunteers }) => (
  <Table>
    <TableHeader>
      <TableItem>DOCUMENTO</TableItem>
      <TableItem>APELLIDO</TableItem>
      <TableItem>NOMBRE</TableItem>
      <TableItem />
    </TableHeader>
    <TableBody>
      {volunteers.map(item => (
        <VolunteerItem key={item.uuid} {...item} />
      ))}
    </TableBody>
  </Table>
);

interface VolunteersProps {
  volunteers: IVolunteer[];
}
