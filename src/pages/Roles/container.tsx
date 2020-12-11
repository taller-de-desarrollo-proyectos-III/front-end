import React, { FunctionComponent, useState } from "react";
import { useGetRoles } from "$hooks";
import { Roles } from "./component";

export const RolesContainer: FunctionComponent = () => {
  const [openRoleForm, setOpenRoleForm] = useState(false);
  const roles = useGetRoles([openRoleForm]);

  return <Roles roles={roles} setOpenRoleForm={setOpenRoleForm} openRoleForm={openRoleForm} />;
};
