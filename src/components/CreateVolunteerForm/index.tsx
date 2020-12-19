import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";
import { Button } from "$components/Button";
import * as Yup from "yup";
import { IUseCreateVolunteerVariables } from "$hooks";
import { Card } from "$components/Card";
import styles from "./style.module.scss";
import { TextField } from "../TextField";
import { CommissionSelector } from "../CommissionSelector";
import { RoleSelector } from "../RoleSelector";
import { number, string } from "yup";
import { RegExBuilder } from "$models/RegExBuilder";
import { StateSelector } from "../StateSelector";

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
          .required("Tenés que completar el DNI"),
        email: Yup.string()
          .email("Ese no parece ser un email válido")
          .required("Tenés que completar el correo electrónico"),
        phoneNumber: Yup.string()
          .matches(RegExBuilder.phoneNumber(), "Ese no parece un número válido")
          .required("Tenés que completar el número de teléfono"),
        admissionYear: number()
          .typeError("Ingresá un número")
          .max(new Date().getFullYear(), "Tiene que ser un año anterior o igual al actual"),
        graduationYear: number()
          .typeError("Ingresá un número")
          .max(new Date().getFullYear(), "Tiene que ser un año anterior o igual al actual"),
        country: string().typeError("Ingresá un nombre de país válido"),
        stateUuids: string().required("Tenés que asignar un estado")
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
                  <TextField
                    name={"pronoun"}
                    label={"Pronombre"}
                    disabled={isSubmitting}
                    fullWidth
                  />
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
              <div className={styles.fieldContainer}>
                <div className={styles.field}>
                  <RoleSelector
                    name={"roleUuids"}
                    label={"Roles"}
                    disabled={isSubmitting}
                    fullWidth
                  />
                </div>
              </div>
              <div className={styles.fieldContainer}>
                <div className={styles.field}>
                  <StateSelector
                    name={"stateUuid"}
                    label={"Estado"}
                    disabled={isSubmitting}
                    fullWidth
                  />
                </div>
              </div>
              <div className={styles.fieldContainer}>
                <div className={styles.field}>
                  <TextField
                    name={"email"}
                    label={"Correo electrónico"}
                    disabled={isSubmitting}
                    fullWidth
                  />
                </div>
              </div>
              <div className={styles.fieldContainer}>
                <div className={styles.field}>
                  <TextField
                    name={"linkedin"}
                    label={"Perfil de Linkedin"}
                    disabled={isSubmitting}
                    fullWidth
                  />
                </div>
              </div>
              <div className={styles.fieldContainer}>
                <div className={styles.field}>
                  <TextField
                    name={"phoneNumber"}
                    label={"Número de teléfono"}
                    disabled={isSubmitting}
                    fullWidth
                  />
                </div>
              </div>
              <div className={styles.fieldContainer}>
                <div className={styles.field}>
                  <TextField
                    name={"telegram"}
                    label={"Telegram"}
                    disabled={isSubmitting}
                    fullWidth
                  />
                </div>
              </div>
              <div className={styles.fieldContainer}>
                <div className={styles.field}>
                  <TextField
                    name={"admissionYear"}
                    label={"Año de inicio como voluntarie"}
                    disabled={isSubmitting}
                    fullWidth
                  />
                </div>
              </div>
              <div className={styles.fieldContainer}>
                <div className={styles.field}>
                  <TextField
                    name={"graduationYear"}
                    label={"Año de egreso si es egresado de Nahual"}
                    disabled={isSubmitting}
                    fullWidth
                  />
                </div>
              </div>
              <div className={styles.fieldContainer}>
                <div className={styles.field}>
                  <TextField
                    name={"country"}
                    label={"Nacionalidad"}
                    disabled={isSubmitting}
                    fullWidth
                  />
                </div>
              </div>
              <div className={styles.notesFieldContainer}>
                <div className={styles.field}>
                  <TextField
                    name={"notes"}
                    label={"Notas"}
                    disabled={isSubmitting}
                    multiline
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
