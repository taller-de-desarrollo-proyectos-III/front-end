import React, { FunctionComponent } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { Form, Formik } from "formik";
import { Button } from "$components/Button";
import styles from "./styles.module.scss";
import { TextField } from "../TextField";

const formName = "RoleForm";

export const RoleForm: FunctionComponent<IConfirmDialogProps> = ({
  isOpen,
  onClose,
  initialValues,
  onSubmit
}) => (
  <Dialog open={isOpen} onClose={onClose}>
    <DialogTitle>
      <span className={styles.title}>{"Escriba el nombre y la descripcion del rol"}</span>
    </DialogTitle>
    <DialogContent>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form id={formName}>
            <TextField
              className={styles.formField}
              name="name"
              label="Nombre"
              disabled={isSubmitting}
              fullWidth
            />
            <TextField name="description" label="Description" disabled={isSubmitting} fullWidth />
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

interface IConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  initialValues: { name: string; description?: string };
  onSubmit: (values: { name: string; description?: string }) => void;
}
