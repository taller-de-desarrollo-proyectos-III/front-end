import React, { FunctionComponent } from "react";
import { IVolunteer } from "$hooks";
import { VolunteerItem } from "./VolunteerItem";
import styles from "./styles.module.scss";

interface VolunteersProps {
  volunteers: IVolunteer[];
}

export const VolunteersTable: FunctionComponent<VolunteersProps> = ({ volunteers }) => (
  <div className={styles.tableOverview}>
    <table>
      <thead>
        <tr className={styles.tableHeader}>
          <th>DOCUMENTO</th>
          <th>APELLIDO</th>
          <th>NOMBRE</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {volunteers.map(item => (
          <VolunteerItem key={item.uuid} {...item} />
        ))}
      </tbody>
    </table>
  </div>
);
