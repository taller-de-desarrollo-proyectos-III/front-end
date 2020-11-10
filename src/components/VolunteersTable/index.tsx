import React, { FunctionComponent } from "react";
import { IVolunteer } from "$hooks";
import { VolunteerItem } from "./VolunteerItem";
import { Table } from "$components/Table";

export const VolunteersTable: FunctionComponent<VolunteersProps> = ({ volunteers }) => (
  <Table
    header={
      <>
        <th>DOCUMENTO</th>
        <th>APELLIDO</th>
        <th>NOMBRE</th>
        <th />
      </>
    }
    body={
      <>
        {volunteers.map(item => (
          <VolunteerItem key={item.uuid} {...item} />
        ))}
      </>
    }
  />
);

interface VolunteersProps {
  volunteers: IVolunteer[];
}
