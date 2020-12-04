import React, { FunctionComponent } from "react";
import { VolunteersTable } from "$components/VolunteersTable";
import { MainContent } from "$components/MainContent";
import { NavBar } from "$components/NavBar";
import { NavBarVolunteerList } from "$components/NavBarVoluntariesList";
import { VolunteersFilter } from "$components/VolunteersFilter";
import { IInitialValues } from "$components/VolunteersFilter/interfaces";

import { IVolunteer } from "$hooks";

import styles from "./styles.module.scss";

export const Home: FunctionComponent<IComponentProps> = ({ volunteers, setFilter, filter }) => (
  <MainContent>
    <NavBar />
    <NavBarVolunteerList />
    <div className={styles.tableContainer}>
      <div className={styles.columnFilter}>
        <VolunteersFilter initialValues={filter} onApplyFilter={setFilter} />
      </div>
      <div className={styles.tableContent}>
        <VolunteersTable volunteers={volunteers} />
      </div>
    </div>
  </MainContent>
);

interface IComponentProps {
  filter: IInitialValues;
  setFilter: (values: IInitialValues) => void;
  volunteers: IVolunteer[];
}
