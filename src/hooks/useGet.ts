import { BackendConfig } from "$config";
import { useHistory } from "react-router-dom";
import useFetch from "use-http";
import { stringify, StringifiableRecord } from "query-string";

export const useGet = <TVariables extends StringifiableRecord, TData extends object>(
  {
    endpoint,
    params
  }: UseGet<TVariables>
) => {
  const history = useHistory();
  const queryParams = stringify(params || {}, { arrayFormat: "comma" });
  const { data, loading } = useFetch<TData>(
    `${BackendConfig.url}/${endpoint}/${queryParams}`,
    {
      method: "GET",
      onError: () =>  history.push("/error"),
      responseType: "json",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5000"
      }
    },
    []
  );
  return { data, loading } as UseGetResult<TData>;
};

type UseGet<TVariables> = {
  endpoint: string;
  params?: TVariables;
};

type UseGetResult<TData> = (ILoading | ISuccessful<TData>);

type ILoading = {
  data: undefined;
  loading: true;
};

type ISuccessful<TData> = {
  data: TData;
  loading: false;
};
