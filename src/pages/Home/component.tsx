import React, { FunctionComponent } from "react";
import { VolunteerSerializer } from "$models";
import { CSVLink } from "react-csv";
import { VolunteersTable } from "$components/VolunteersTable";
import { Card } from "$components/Card";
import { Button } from "$components/Button";
import { MainContent } from "$components/MainContent";
import { NavBar } from "$components/NavBar";
import { Title } from "$components/Title";
import { VolunteersFilter } from "$components/VolunteersFilter";
import { IVolunteersFilter } from "$components/VolunteersFilter/interfaces";

import { IVolunteer } from "$hooks";

import styles from "./styles.module.scss";

export const Home: FunctionComponent<IComponentProps> = ({
  volunteers,
  setFilter,
  filter,
  onClickAddVolunteers
}) => (
  <MainContent>
    <NavBar />
    <Title className={styles.title} title={"Listado de Voluntaries"} />
    <Button className={styles.addVolunteer} onClick={onClickAddVolunteers}>
      Agregar
    </Button>
    <div className={styles.tableContainer}>
      <div className={styles.columnFilter}>
        <VolunteersFilter initialValues={filter} onApplyFilter={setFilter} />
        <Card className={styles.downloadForm}>
          <Button className={styles.exportButton}>
            <CSVLink
              data={volunteers.map(VolunteerSerializer.serialize)}
              filename={"Voluntaries.csv"}
              className={styles.downloadButton}
            >
              Exportar a CSV
            </CSVLink>
          </Button>
        </Card>
      </div>
      <div className={styles.tableContent}>
        <VolunteersTable volunteers={volunteers} />
      </div>
    </div>
  </MainContent>
);

interface IComponentProps {
  filter: IVolunteersFilter;
  setFilter: (values: IVolunteersFilter) => void;
  volunteers: IVolunteer[];
  onClickAddVolunteers: () => void;
}
