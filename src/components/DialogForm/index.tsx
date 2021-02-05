import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { Form, Formik } from "formik";
import { Button } from "$components/Button";
import styles from "./styles.module.scss";
import { TextField } from "../TextField";

const formName = "Form";

export const DialogForm: FunctionComponent<IComponentProps> = ({
  title,
  isOpen,
  onClose,
  initialValues,
  onSubmit,
  withDescription
}) => (
  <Dialog open={isOpen} onClose={onClose}>
    <DialogTitle>
      <span className={styles.title}>{title}</span>
    </DialogTitle>
    <DialogContent>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form id={formName}>
            <TextField
              className={classNames({ [styles.formField]: withDescription })}
              name="name"
              label="Nombre"
              disabled={isSubmitting}
              fullWidth
            />
            {withDescription && (
              <TextField name="description" label="Descripción" disabled={isSubmitting} fullWidth />
            )}
          </Form>
        )}
      </Formik>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} kind="secondary">
        Cancelar
      </Button>
      <Button form={formName} kind="primary" type="submit">
        Confirmar
      </Button>
    </DialogActions>
  </Dialog>
);

export interface IValues {
  name: string;
  description?: string;
}

interface IComponentProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  initialValues: IValues;
  onSubmit: (values: IValues) => void;
  withDescription: boolean;
}
