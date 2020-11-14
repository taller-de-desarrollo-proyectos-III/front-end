import { Card } from "$components/Card";
import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { CommissionsTable } from "$components/CommissionsTable";
import { ICommission } from "$hooks/Commissions";
import { TextField } from "@material-ui/core";

export const VolunteerPersonalCard: FunctionComponent<IVolunteerPersonalCard> = props => (
  <div className={styles.mainContainer}>
    <Card className={styles.card}>
      <h3>Información personal</h3>
      <form className={styles.form}>
        <div className={styles.fieldContainer}>
          <div className={styles.field}>
            <TextField
              label={"Número de documento"}
              defaultValue={props.dni}
              variant={"outlined"}
              fullWidth
              InputProps={{
                readOnly: true
              }}
            />
          </div>
        </div>
        <div className={styles.fieldContainer}>
          <div className={styles.field}>
            <TextField
              label={"Correo electrónico"}
              defaultValue={props.email}
              variant={"outlined"}
              fullWidth
              InputProps={{
                readOnly: true
              }}
            />
          </div>
        </div>
        <div className={styles.fieldContainer}>
          <div className={styles.field}>
            <TextField
              label={"Teléfono"}
              defaultValue={props.phoneNumber}
              variant={"outlined"}
              fullWidth
              InputProps={{
                readOnly: true
              }}
            />
          </div>
        </div>
        {props.telegram && (
          <div className={styles.fieldContainer}>
            <div className={styles.field}>
              <TextField
                label={"Telegram"}
                defaultValue={props.telegram}
                variant={"outlined"}
                fullWidth
                InputProps={{
                  readOnly: true
                }}
              />
            </div>
          </div>
        )}
        {props.admissionYear && (
          <div className={styles.fieldContainer}>
            <div className={styles.field}>
              <TextField
                label={"Año de ingreso"}
                defaultValue={props.admissionYear}
                variant={"outlined"}
                fullWidth
                InputProps={{
                  readOnly: true
                }}
              />
            </div>
          </div>
        )}
        {props.graduationYear && (
          <div className={styles.fieldContainer}>
            <div className={styles.field}>
              <TextField
                label={"Año de graduación"}
                defaultValue={props.graduationYear}
                variant={"outlined"}
                fullWidth
                InputProps={{
                  readOnly: true
                }}
              />
            </div>
          </div>
        )}
        {props.country && (
          <div className={styles.fieldContainer}>
            <div className={styles.field}>
              <TextField
                label={"Nacionalidad"}
                defaultValue={props.country}
                variant={"outlined"}
                fullWidth
                InputProps={{
                  readOnly: true
                }}
              />
            </div>
          </div>
        )}
      </form>
    </Card>
    <Card className={styles.card}>
      <h3>Comisiones</h3>
      <CommissionsTable commissions={props.commissions} />
    </Card>
  </div>
);

export interface IVolunteerPersonalCard {
  dni: string;
  email: string;
  phoneNumber: string;
  telegram?: string;
  admissionYear?: string;
  graduationYear?: string;
  country?: string;
  commissions: ICommission[];
}
