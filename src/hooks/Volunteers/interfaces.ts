import { ICommission } from "../Commissions";

export interface IVolunteer {
  uuid: string;
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
  commissions: ICommission[];
}