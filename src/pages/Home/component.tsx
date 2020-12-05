import React, { FunctionComponent } from "react";
import { CSVLink } from "react-csv";
import { Form, Formik } from "formik";
import { VolunteersTable } from "$components/VolunteersTable";
import { MainContent } from "$components/MainContent";
import { CommissionSelector } from "$components/CommissionSelector";
import { NavBar } from "$components/NavBar";
import { NavBarVolunteerList } from "$components/NavBarVoluntariesList";
import { Card } from "$components/Card";
import { Button } from "$components/Button";

import { IVolunteer } from "$hooks";

import styles from "./styles.module.scss";

export const Home: FunctionComponent<IComponentProps> = ({
  volunteers,
  selectedCommissionUuids,
  setCommissionUuids
}) => (
  <MainContent>
    <NavBar />
    <NavBarVolunteerList />
    <div className={styles.tableContainer}>
      <div className={styles.columnFilter}>
        <Card>
          <h3>FILTROS:</h3>
          <Formik
            initialValues={{ commissionUuids: selectedCommissionUuids }}
            onSubmit={setCommissionUuids}
          >
            {({ isSubmitting }) => (
              <Form>
                <CommissionSelector
                  name={"commissionUuids"}
                  label={"Comisiones"}
                  disabled={isSubmitting}
                  fullWidth
                />
                <Button className={styles.applyButton} type={"submit"} disabled={isSubmitting}>
                  Aplicar
                </Button>
              </Form>
            )}
          </Formik>
        </Card>
        <Card className={styles.downloadForm}>
          <Button>
            <CSVLink
              data={volunteers}
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
  setCommissionUuids: (values: { commissionUuids: string[] }) => void;
  volunteers: IVolunteer[];
  selectedCommissionUuids: string[];
}
