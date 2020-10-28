import React, { FunctionComponent } from "react";
import { Form, Field, Formik } from "formik";
import { Button } from "../Button";
import * as Yup from "yup";
import {
  useAddVolunteerFormManagement
} from "./useAddVolunteerFormManagement";

export const AddVolunteerForm: FunctionComponent = () => {
  const { initialValues, onSubmit } = useAddVolunteerFormManagement();
  return (
    <Formik
      initialValues={ initialValues  }
      onSubmit={ onSubmit }
      validationSchema={ Yup.object().shape({
        name: Yup.string().required("Tenés que completar el nombre"),
        surname: Yup.string().required("Tenés que completar el apellido"),
        dni: Yup.number()
          .typeError("El DNI debe ser un número")
          .integer("El DNI debe ser un número entero")
          .required("Tenés que completar el DNI")
      })}
    >
      {(props => {
        const {
          touched,
          errors,
          isSubmitting
        } = props;
        return(
          <Form>
            <div>
              <div>Nombre</div>
              <Field type={"text"} name={"name"} placeholder={"Nombre"}/>
              {touched.name && errors.name && <div>{errors.name}</div>}
            </div>

            <div>
              <div>Apellido</div>
              <Field type={"text"} name={"surname"} placeholder={"Apellido"}/>
              {touched.surname && errors.surname && <div>{errors.surname}</div>}
            </div>

            <div>
              <div>DNI</div>
              <Field type={"text"} name={"dni"} placeholder={"Número de documento"}/>
              {touched.dni && errors.dni && <div>{errors.dni}</div>}
            </div>

            <Button type={"submit"} disabled={isSubmitting}>
              Agregar voluntarie
            </Button>
          </Form>
        );
      })}
    </Formik>
  );
};
