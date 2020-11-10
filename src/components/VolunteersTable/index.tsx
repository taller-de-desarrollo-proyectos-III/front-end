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
      <tbody>
        <tr className={styles.tableHeader}>
          <td className={styles.firstLeft}>
            <h4>DOCUMENTO</h4>
          </td>
          <td>
            <h4>APELLIDO</h4>
          </td>
          <td>
            <h4>NOMBRE</h4>
          </td>
          <td className={styles.firstRight} />
        </tr>

        {volunteers.map(item => (
          <VolunteerItem key={item.uuid} {...item} />
        ))}
      </tbody>
    </table>
  </div>
);
