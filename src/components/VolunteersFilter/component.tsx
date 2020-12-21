import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";
import { CommissionSelector } from "$components/CommissionSelector";
import { RoleSelector } from "$components/RoleSelector";
import { StateSelector } from "$components/StateSelector";
import { Button } from "$components/Button";
import styles from "./styles.module.scss";
import { Card } from "$components/Card";
import { IComponentProps, IVolunteersFilter } from "./interfaces";

export const VolunteersFilter: FunctionComponent<IComponentProps> = ({
  initialValues,
  onSubmit
}) => (
  <Card>
    <h3>FILTROS:</h3>
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <CommissionSelector
            className={styles.selector}
            name={"commissionUuids"}
            label={"Comisiones"}
            disabled={isSubmitting}
            fullWidth
          />
          <RoleSelector<IVolunteersFilter>
            className={styles.selector}
            name={"roleUuids"}
            label={"Roles"}
            disabled={isSubmitting}
            fullWidth
          />
          <StateSelector<IVolunteersFilter>
            className={styles.selector}
            name={"stateUuids"}
            label={"Estados"}
            disabled={isSubmitting}
            multiple={true}
            fullWidth
          />
          <Button type="submit" disabled={isSubmitting}>
            Aplicar
          </Button>
        </Form>
      )}
    </Formik>
  </Card>
);
