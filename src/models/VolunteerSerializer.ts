import { IVolunteer } from "$hooks";

export const VolunteerSerializer = {
  serialize: ({ uuid, commissions, roles, ...attributes }: IVolunteer) => {
    return {
      ...attributes,
      commissions: commissions.map(commission => commission.name).join(","),
      roles: roles.map(role => role.name).join(",")
    };
  }
};
