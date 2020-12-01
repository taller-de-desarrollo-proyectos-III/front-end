import React, { FunctionComponent } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { Form, Formik } from "formik";
import { Button } from "$components/Button";
import styles from "./styles.module.scss";
import { TextField } from "../TextField";

const formName = "CommissionForm";

export const CommissionForm: FunctionComponent<IConfirmDialogProps> = ({
  isOpen,
  onClose,
  initialValues,
  onSubmit
}) => (
  <Dialog open={isOpen} onClose={onClose}>
    <DialogTitle>
      <span className={styles.title}>{"Escriba el nombre de la comisión"}</span>
    </DialogTitle>
    <DialogContent>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form id={formName}>
            <TextField name="name" label="Nombre" disabled={isSubmitting} fullWidth />
          </Form>
        )}
      </Formik>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} kind="secondary">
        Cancelar
      </Button>
    </DialogActions>
  </Dialog>
);

interface IConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  initialValues: { name: string };
  onSubmit: (values: { name: string }) => void;
}
