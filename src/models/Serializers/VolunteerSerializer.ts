import { IVolunteer } from "$hooks";
import { RolesSerializer } from "./RolesSerializer";
import { CommissionsSerializer } from "./CommissionsSerializer";

export const VolunteerSerializer = {
  serialize: ({ uuid, commissions, roles, ...attributes }: IVolunteer) => {
    return {
      ...attributes,
      commissions: CommissionsSerializer.serialize(commissions),
      roles: RolesSerializer.serialize(roles)
    };
  }
};
