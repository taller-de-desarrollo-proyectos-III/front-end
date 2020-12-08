import { IRole } from "$hooks";

export const RolesSerializer = {
  serialize: (roles: IRole[]) => roles.map(role => role.name).join(",")
};
