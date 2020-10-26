import { useGet } from "$hooks/useGet";

export const useGetCommission = () => {
    return useGet<{},ICommission[]>({
        endpoint: "/commission"});
};

/*
export const useGetCommission = [
    {
        uuid: 1,
        name: "Campañas en RRSS"
    },
    {
        uuid: 2,
        name: "Comunicación"
    },
    {
        uuid: 3,
        name: "Egresades"
    }
];
*/

export interface ICommission {
    uuid: number;
    name: string;
}
