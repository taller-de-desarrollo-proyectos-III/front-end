import { useEffect, useState } from "react";
import { IVolunteer } from "$hooks";
import { BackendService } from "$services";
import { IInitialValues } from "$components/VolunteersFilter/interfaces";

export const useGetVolunteers = (attributes?: IInitialValues) => {
  const [volunteers, setVolunteers] = useState<IVolunteer[]>([]);
  useEffect(() => {
    if (!attributes) return;
    BackendService.getVolunteers(attributes).then(({ body }) => setVolunteers(body));
  }, [attributes]);
  return volunteers;
};
