import { useEffect, useState } from "react";
import { BackendService } from "../../services/Backend";
import { IVolunteer } from "./interfaces";

export const useGetVolunteerByUuid = (uuid: string) => {
  const [volunteer, setVolunteer] = useState<IVolunteer>();
  useEffect(() => {
    BackendService.getVolunteerByUuid(uuid).then(({ body }) => setVolunteer(body));
  }, [uuid]);
  return volunteer;
};
