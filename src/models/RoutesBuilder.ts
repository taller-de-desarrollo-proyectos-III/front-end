export const RoutesBuilder = {
  volunteers: {
    home: () => "/",
    create: () => "/volunteers/create",
    edit: (uuid: string) => `/volunteers/edit/${uuid}`
  }
};
