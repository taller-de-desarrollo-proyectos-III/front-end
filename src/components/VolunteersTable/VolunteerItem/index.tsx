import React, { FunctionComponent } from "react";
import { IVolunteer } from "$hooks/Volunteers";
import styles from "./styles.module.scss";

export const VolunteerItem: FunctionComponent<IVolunteer> = ({ name, surname, dni }) => (
  <tr className={styles.tableItem}>
    <td>
      <h5>{dni}</h5>
    </td>
    <td>
      <h5>{surname}</h5>
    </td>
    <td>
      <h5>{name}</h5>
    </td>
  </tr>
);
