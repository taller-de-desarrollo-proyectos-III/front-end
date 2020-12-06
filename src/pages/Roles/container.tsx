import React, { FunctionComponent, useState } from "react";
import { useGetRoles } from "$hooks";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Roles } from "./component";

export const RolesContainer: FunctionComponent = () => {
  const [openRoleForm, setOpenRoleForm] = useState(false);
  const roles = useGetRoles([openRoleForm]);
  if (!roles) return <LoadingSpinner />;

  return <Roles roles={roles} setOpenRoleForm={setOpenRoleForm} openRoleForm={openRoleForm} />;
};
