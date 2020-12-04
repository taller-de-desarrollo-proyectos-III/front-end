import { useEffect, useState } from "react";
import { IVolunteer } from "$hooks";
import { BackendService } from "$services";
import { IInitialValues } from "$components/VolunteersFilter/interfaces";

export const useGetVolunteers = ({ commissionUuids }: IInitialValues) => {
  const [volunteers, setVolunteers] = useState<IVolunteer[]>([]);
  useEffect(() => {
    BackendService.getVolunteers(commissionUuids).then(({ body }) => setVolunteers(body));
  }, [commissionUuids]);
  return volunteers;
};
