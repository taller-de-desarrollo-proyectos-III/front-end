import { useEffect, useState } from "react";
import { IVolunteer } from "$hooks";
import { BackendService } from "$services";
import { IVolunteersFilter } from "$components/VolunteersFilter/interfaces";

export const useGetVolunteers = ({ filter }: IUseGetVolunteers) => {
  const [volunteers, setVolunteers] = useState<IVolunteer[]>([]);
  useEffect(() => {
    BackendService.getVolunteers(filter).then(({ body }) => setVolunteers(body));
  }, [filter]);
  return volunteers;
};

interface IUseGetVolunteers {
  filter: IVolunteersFilter;
}
