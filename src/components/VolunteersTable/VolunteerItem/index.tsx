import React, { FunctionComponent } from "react";
import { IVolunteer } from "$hooks/Volunteers";
import { Button } from "$components/Button";
import { useHistory } from "react-router-dom";
import styles from "./styles.module.scss";
import { RoutesBuilder } from "$models";

export const VolunteerItem: FunctionComponent<IVolunteer> = ({ uuid, name, surname, dni }) => {
  const history = useHistory();
  return (
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
      <td className={styles.editVolunteer}>
        <Button
          className={styles.editButton}
          onClick={() => history.push(RoutesBuilder.volunteers.edit(uuid))}
        >
          Editar
        </Button>
      </td>
    </tr>
  );
};
