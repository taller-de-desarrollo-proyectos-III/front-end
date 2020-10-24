/*import { useGet } from "$hooks/useGet";

export const useGetVolunteer = () => {
    return useGet<{},IVolunteer[]>({
        endpoint: "/getVolunteers"}))
};*/

export const useGetVolunteer = [
    {
        uuid: 1,
        firstName: "Alberto",
        lastName: "Alonso",
        documentNumber: 20345543,
        commission: "Campañas en RRSS"
    },
    {
        uuid: 2,
        firstName: "Emily",
        lastName: "Duran",
        documentNumber: 20345543,
        commission: "Comunicación"
    },
    {
        uuid: 3,
        firstName: "Paula",
        lastName: "Manto",
        documentNumber: 20345543,
        commission: "Egresades"
    }
];

export interface IVolunteer {
    uuid: number;
    firstName: string;
    lastName: string;
    documentNumber: number;
    commission: string;
}
