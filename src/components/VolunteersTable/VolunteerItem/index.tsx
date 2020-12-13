import React, { FunctionComponent } from "react";
import { IVolunteer } from "$hooks/Volunteers";
import { TableRow } from "$components/Table/TableRow";
import { TableItem } from "$components/Table/TableItem";
import { ActionItem } from "$components/Table/ActionItem";
import { useHistory } from "react-router-dom";
import { RoutesBuilder, CommissionsSerializer, RolesSerializer } from "$models";

export const VolunteerItem: FunctionComponent<IVolunteer> = volunteer => {
  const history = useHistory();
  return (
    <TableRow>
      <TableItem>{volunteer.name}</TableItem>
      <TableItem>{volunteer.surname}</TableItem>
      <TableItem>{CommissionsSerializer.serialize(volunteer.commissions) || "No tiene"}</TableItem>
      <TableItem>{RolesSerializer.serialize(volunteer.roles) || "No tiene"}</TableItem>
      <TableItem>{volunteer.state.name}</TableItem>
      <ActionItem onClick={() => history.push(RoutesBuilder.volunteers.detail(volunteer.uuid))}>
        Ver
      </ActionItem>
    </TableRow>
  );
};
