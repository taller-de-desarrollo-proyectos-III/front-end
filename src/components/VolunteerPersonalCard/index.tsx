import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Card } from "$components/Card";
import { CommissionsTable } from "$components/CommissionsTable";
import { TextField } from "@material-ui/core";
import { RolesTable } from "$components/RolesTable";
import { IVolunteer } from "$hooks";
import styles from "./styles.module.scss";
import { LoadingSpinner } from "../LoadingSpinner";

export const VolunteerPersonalCard: FunctionComponent<IVolunteerPersonalCard> = ({ volunteer }) => (
  <div className={styles.mainContainer}>
    <Card className={styles.cardPersonalData}>
      <h3>Información personal</h3>
      <form className={styles.form}>
        <div className={styles.fieldContainer}>
          <div className={styles.field}>
            {!volunteer && <LoadingSpinner />}
            {volunteer && (
              <TextField
                label={"Número de documento"}
                defaultValue={volunteer.dni}
                variant={"outlined"}
                fullWidth
                InputProps={{
                  readOnly: true
                }}
              />
            )}
          </div>
        </div>
        {volunteer && volunteer.pronoun && (
          <div className={styles.fieldContainer}>
            <div className={styles.field}>
              <TextField
                label={"Pronombre"}
                defaultValue={volunteer.pronoun}
                variant={"outlined"}
                fullWidth
                InputProps={{
                  readOnly: true
                }}
              />
            </div>
          </div>
        )}
        <div className={styles.fieldContainer}>
          <div className={styles.field}>
            {!volunteer && <LoadingSpinner />}
            {volunteer && (
              <TextField
                label={"Correo electrónico"}
                defaultValue={volunteer.email}
                variant={"outlined"}
                fullWidth
                InputProps={{
                  readOnly: true
                }}
              />
            )}
          </div>
        </div>
        <div className={styles.fieldContainer}>
          <div className={styles.field}>
            {!volunteer && <LoadingSpinner />}
            {volunteer && (
              <TextField
                label={"Estado"}
                defaultValue={volunteer.state.name}
                variant={"outlined"}
                fullWidth
                InputProps={{
                  readOnly: true
                }}
              />
            )}
          </div>
        </div>
        <div className={styles.fieldContainer}>
          <div className={styles.field}>
            {!volunteer && <LoadingSpinner />}
            {volunteer && (
              <TextField
                label={"Teléfono"}
                defaultValue={volunteer.phoneNumber}
                variant={"outlined"}
                fullWidth
                InputProps={{
                  readOnly: true
                }}
              />
            )}
          </div>
        </div>
        {volunteer && volunteer.telegram && (
          <div className={styles.fieldContainer}>
            <div className={styles.field}>
              <TextField
                label={"Telegram"}
                defaultValue={volunteer.telegram}
                variant={"outlined"}
                fullWidth
                InputProps={{
                  readOnly: true
                }}
              />
            </div>
          </div>
        )}
        {volunteer && volunteer.admissionYear && (
          <div className={styles.fieldContainer}>
            <div className={styles.field}>
              <TextField
                label={"Año de inicio como voluntarie"}
                defaultValue={volunteer.admissionYear}
                variant={"outlined"}
                fullWidth
                InputProps={{
                  readOnly: true
                }}
              />
            </div>
          </div>
        )}
        {volunteer && volunteer.graduationYear && (
          <div className={styles.fieldContainer}>
            <div className={styles.field}>
              <TextField
                label={"Año de egreso si es egresado de Nahual"}
                defaultValue={volunteer.graduationYear}
                variant={"outlined"}
                fullWidth
                InputProps={{
                  readOnly: true
                }}
              />
            </div>
          </div>
        )}
        {volunteer && volunteer.country && (
          <div className={styles.fieldContainer}>
            <div className={styles.field}>
              <TextField
                label={"Nacionalidad"}
                defaultValue={volunteer.country}
                variant={"outlined"}
                fullWidth
                InputProps={{
                  readOnly: true
                }}
              />
            </div>
          </div>
        )}
        {volunteer && volunteer.notes && (
          <div className={styles.notesFieldContainer}>
            <div className={styles.field}>
              <TextField
                label={"Notas"}
                defaultValue={volunteer.notes}
                variant={"outlined"}
                multiline
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
    {volunteer && volunteer.commissions.length > 0 && (
      <Card className={classNames(styles.commissions, styles.card)}>
        <h3>Comisiones</h3>
        <CommissionsTable
          readonly
          className={styles.commissionsTable}
          commissions={volunteer.commissions}
        />
      </Card>
    )}
    {volunteer && volunteer.roles.length > 0 && (
      <Card className={classNames(styles.roles, styles.card)}>
        <h3>Roles</h3>
        <RolesTable readonly className={styles.rolesTable} roles={volunteer.roles} />
      </Card>
    )}
  </div>
);

export interface IVolunteerPersonalCard {
  volunteer?: IVolunteer;
}
