import React, { FunctionComponent } from "react";
import { IVolunteer } from "$hooks";
import { VolunteerItem } from "./VolunteerItem";
import { Table } from "$components/Table";
import { TableHeader } from "$components/Table/TableHeader";
import { TableBody } from "$components/Table/TableBody";

export const VolunteersTable: FunctionComponent<VolunteersProps> = ({ volunteers }) => (
  <Table>
    <TableHeader>
      <th>DOCUMENTO</th>
      <th>APELLIDO</th>
      <th>NOMBRE</th>
      <th />
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
