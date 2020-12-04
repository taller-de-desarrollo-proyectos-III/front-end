import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";
import { CommissionSelector } from "$components/CommissionSelector";
import { Button } from "$components/Button";
import styles from "./styles.module.scss";
import { Card } from "$components/Card";
import { IComponentProps } from "./interfaces";

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
            name={"commissionUuids"}
            label={"Comisiones"}
            disabled={isSubmitting}
            fullWidth
          />
          <Button className={styles.applyButton} type="submit" disabled={isSubmitting}>
            Aplicar
          </Button>
        </Form>
      )}
    </Formik>
  </Card>
);
