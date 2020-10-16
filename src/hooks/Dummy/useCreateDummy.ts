import { usePost } from "$hooks/usePost";

export const useCreateDummy = () => {
  const { post } = usePost<IUseCreateDummyVariables, IDummy>({
    endpoint: "/dummies"
  });
  return { createDummy: post };
};

export interface IDummy {
  uuid: string;
  welcomeMessage: string;
}

interface IUseCreateDummyVariables {
  welcomeMessage: string;
}
