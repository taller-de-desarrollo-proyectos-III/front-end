import React, { FunctionComponent } from "react";
import { IVolunteer } from "$hooks/Volunteers";
import { TableRow } from "$components/Table/TableRow";
import { ActionItem } from "$components/Table/ActionItem";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models";

export const VolunteerItem: FunctionComponent<IVolunteer> = ({ uuid, name, surname, dni }) => {
  const history = useHistory();
  return (
    <TableRow>
      <td>
        <h5>{dni}</h5>
      </td>
      <td>
        <h5>{surname}</h5>
      </td>
      <td>
        <h5>{name}</h5>
      </td>
      <ActionItem onClick={() => history.push(RoutesBuilder.volunteers.detail(uuid))}>
        Ver
      </ActionItem>
    </TableRow>
  );
};
