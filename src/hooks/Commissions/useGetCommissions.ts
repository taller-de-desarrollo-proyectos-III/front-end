import { useGet } from "$hooks/useGet";

export const useGetCommissions = () =>
    useGet<{},ICommission[]>({ endpoint: "commissions" });

export interface ICommission {
    uuid: string;
    name: string;
}
