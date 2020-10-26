import { useGet } from "$hooks/useGet";

export const useGetCommissions = () =>
    useGet<{},ICommission[]>({ endpoint: "/commission" });

export interface ICommission {
    uuid: number;
    name: string;
}
