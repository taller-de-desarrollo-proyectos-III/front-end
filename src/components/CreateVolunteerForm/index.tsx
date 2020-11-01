import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";
import { Button } from "$components/Button";
import * as Yup from "yup";
import { IUseCreateVolunteerVariables } from "$hooks";
import { Card } from "$components/Card";
import styles from "./style.module.scss";
import { TextField } from "../TextField";
import { CommissionSelector } from "../CommissionSelector";

export const CreateVolunteerForm: FunctionComponent<ICreateVolunteerFormProps> = ({
  initialValues,
  onSubmit
}) => (
  <Card>
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Tenés que completar el nombre"),
        surname: Yup.string().required("Tenés que completar el apellido"),
        dni: Yup.number()
          .typeError("El DNI debe ser un número")
          .integer("Completá el DNI sin puntos")
          .required("Tenés que completar el DNI")
      })}
    >
      {props => {
        const { isSubmitting } = props;
        return (
          <Form>
            <div className={styles.form}>
              <div className={styles.fieldContainer}>
                <div className={styles.field}>
                  <TextField
                    name={"name"}
                    label={"Nombre"}
                    autoFocus
                    disabled={isSubmitting}
                    fullWidth
                  />
                </div>
              </div>
              <div className={styles.fieldContainer}>
                <div className={styles.field}>
                  <TextField
                    name={"surname"}
                    label={"Apellido"}
                    disabled={isSubmitting}
                    fullWidth
                  />
                </div>
              </div>
              <div className={styles.fieldContainer}>
                <div className={styles.field}>
                  <TextField name={"dni"} label={"DNI"} disabled={isSubmitting} fullWidth />
                </div>
              </div>
              <div className={styles.fieldContainer}>
                <div className={styles.field}>
                  <CommissionSelector
                    name={"commissionUuids"}
                    label={"Comisiones"}
                    disabled={isSubmitting}
                    fullWidth
                  />
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <Button type={"submit"} disabled={isSubmitting}>
                Guardar
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  </Card>
);

export interface ICreateVolunteerFormProps {
  initialValues: IUseCreateVolunteerVariables;
  onSubmit: (volunteer: IUseCreateVolunteerVariables) => void;
}
