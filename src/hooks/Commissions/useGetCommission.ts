import { useGet } from "$hooks/useGet";

export const useGetCommission = () =>
    useGet<{},ICommission[]>({ endpoint: "/commission" });

export interface ICommission {
    uuid: number;
    name: string;
}
