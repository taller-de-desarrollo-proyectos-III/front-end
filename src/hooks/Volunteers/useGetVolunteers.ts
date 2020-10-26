import { useGet } from "$hooks/useGet";

export const useGetVolunteers = () =>
    useGet<{},IVolunteer[]>({ endpoint: "/volunteers"});

export interface IVolunteer {
    uuid: number;
    firstName: string;
    surname: string;
    dni: number;
    commission: string;
}
