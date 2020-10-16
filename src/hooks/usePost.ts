import { BackendConfig } from "$config";
import useFetch from "use-http";
import { useHistory } from "react-router-dom";

export const usePost = <TVariables extends object, TData extends object | {}>(
  {
    endpoint
  }: UsePost
) => {
  const history = useHistory();
  const { post } = useFetch<TData>(BackendConfig.url, {
    method: "POST",
    responseType: "json",
    onError: ({ error }) => {
      alert(JSON.stringify(error.stack));
      history.push("/");
    },
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  });
  const postRequest = async (body: TVariables) => {
    return post(endpoint, body) as Promise<TData>;
  };

  return { post: postRequest };
};

type UsePost = {
  endpoint: string;
};
