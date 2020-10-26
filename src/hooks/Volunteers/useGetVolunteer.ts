import { useGet } from "$hooks/useGet";

export const useGetVolunteer = () => {
    return useGet<{},IVolunteer[]>({
        endpoint: "/volunteers"});
};

/* export const useGetVolunteer = [
    {
        uuid: 1,
        firstName: "Alberto",
        surname: "Alonso",
        dni: 20345543,
        commission: "Campañas en RRSS"
    },
    {
        uuid: 2,
        firstName: "Emily",
        surname: "Duran",
        dni: 20345543,
        commission: "Comunicación"
    },
    {
        uuid: 3,
        firstName: "Paula",
        surname: "Manto",
        dni: 20345543,
        commission: "Egresades"
    }
]; */

export interface IVolunteer {
    uuid: number;
    firstName: string;
    surname: string;
    dni: number;
    commission: string;
}
