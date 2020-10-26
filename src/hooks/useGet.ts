import { BackendConfig } from "$config";
import { useHistory } from "react-router-dom";
import useFetch from "use-http";
import { stringify } from "query-string";

export const useGet = <TVariables extends object, TData extends object>(
  {
    endpoint,
    params
  }: UseGet<TVariables>
) => {
  const history = useHistory();
  const queryParams = stringify(params || {}, { arrayFormat: "comma" });
  const { data, loading, get } = useFetch<TData>(
    `${BackendConfig.url}/${endpoint}?${queryParams}`,
    {
      method: "GET",
      onError: error => {
        alert(JSON.stringify(error));
        history.push("/error");
      },
      responseType: "json"
    },
    []
  );
  return {
    data,
    loading,
    get: (newVariables?: TVariables) => get(stringify(newVariables || {}))
  } as UseGetResult<TVariables, TData>;
};

type UseGet<TVariables> = {
  endpoint: string;
  params?: TVariables;
};

type UseGetResult<TVariables, TData> = (ILoading | ISuccessful<TVariables, TData>);

type ILoading = {
  get: undefined;
  data: undefined;
  loading: true;
};

type ISuccessful<TVariables, TData> = {
  data: TData;
  get: (variables?: TVariables) => Promise<TData>;
  loading: false;
};
