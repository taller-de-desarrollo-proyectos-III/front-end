import React, { FunctionComponent } from "react";
import { IVolunteer } from "$hooks";
import { VolunteerItem } from "./VolunteerItem";
import { Table } from "$components/Table";
import { TableHeader } from "$components/Table/TableHeader";

export const VolunteersTable: FunctionComponent<VolunteersProps> = ({ volunteers }) => (
  <Table
    body={
      <>
        {volunteers.map(item => (
          <VolunteerItem key={item.uuid} {...item} />
        ))}
      </>
    }
  >
    <TableHeader>
      <th>DOCUMENTO</th>
      <th>APELLIDO</th>
      <th>NOMBRE</th>
      <th />
    </TableHeader>
  </Table>
);

interface VolunteersProps {
  volunteers: IVolunteer[];
}
