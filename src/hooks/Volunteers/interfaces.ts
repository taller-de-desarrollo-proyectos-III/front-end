import { ICommission } from "../Commissions";
import { IRole } from "../Roles";
import { IState } from "../States";

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
  notes?: string;
  commissions: ICommission[];
  roles: IRole[];
  state: IState;
}
