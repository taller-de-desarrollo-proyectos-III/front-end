import React, { FunctionComponent } from "react";
import { IVolunteer } from "$hooks/Volunteers";
import { TableRow } from "$components/Table/TableRow";
import { TableItem } from "$components/Table/TableItem";
import { ActionItem } from "$components/Table/ActionItem";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models";

export const VolunteerItem: FunctionComponent<IVolunteer> = ({ uuid, name, surname, dni }) => {
  const history = useHistory();
  return (
    <TableRow>
      <TableItem>{dni}</TableItem>
      <TableItem>{surname}</TableItem>
      <TableItem>{name}</TableItem>
      <ActionItem onClick={() => history.push(RoutesBuilder.volunteers.detail(uuid))}>
        Ver
      </ActionItem>
    </TableRow>
  );
};
