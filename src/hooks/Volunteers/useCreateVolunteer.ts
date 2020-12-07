import { BackendService } from "$services";
import { TCommissionUuids, TRoleUuids } from "$components/VolunteersFilter/interfaces";

export const useCreateVolunteer = () => {
  const createVolunteer = (volunteer: IUseCreateVolunteerVariables) =>
    BackendService.createVolunteer(volunteer);
  return { createVolunteer };
};

export interface IUseCreateVolunteerVariables {
  name: string;
  surname: string;
  dni: string;
  email: string;
  linkedin?: string;
  phoneNumber: string;
  telegram?: string;
  admissionYear?: string;
  graduationYear?: string;
  country?: string;
  notes?: string;
  commissionUuids: TCommissionUuids;
  roleUuids: TRoleUuids;
}
