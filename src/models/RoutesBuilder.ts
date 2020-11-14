export const RoutesBuilder = {
  volunteers: {
    home: () => "/",
    create: () => "/volunteers/create",
    edit: (uuid: string) => `/volunteers/edit/${uuid}`,
    detail: (uuid: string) => `/volunteers/${uuid}`
  },
  commissions: {
    list: () => "/commissions"
  }
};
