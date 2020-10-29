import React, { FunctionComponent } from "react";
import { VolunteersTable } from "$components/VolunteersTable";
import { MainContent } from "$components/MainContent";
import { Selector } from "$components/Selector";
import { NavBar } from "$components/NavBar";
import { NavBarVolunteerList } from "$components/NavBarVoluntariesList";

import { IVolunteer, ICommission } from "$hooks";

import styles from "./styles.module.scss";

export const Home: FunctionComponent<IComponentProps> = ({
  commission,
  volunteers,
  commissions,
  setCommissionUuid
}) => (
  <MainContent>
    <NavBar />
    <NavBarVolunteerList />
    <div className={styles.tableContainer}>
      <Selector
        onChange={uuid => setCommissionUuid(uuid)}
        selectedValue={commission}
        options={commissions}
        getOptionLabel={({ name }) => name}
        getOptionId={({ uuid }) => uuid}
      />
      <VolunteersTable volunteers={volunteers} />
    </div>
  </MainContent>
);

interface IComponentProps {
  setCommissionUuid: (uuid: string) => void;
  volunteers: IVolunteer[];
  commissions: ICommission[];
  commission?: ICommission;
}
