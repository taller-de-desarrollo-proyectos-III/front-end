import React from "react";
import { FunctionComponent } from "react";
import { MainContent } from "$components/MainContent";
import { CreateVolunteerForm, ICreateVolunteerFormProps } from "$components/CreateVolunteerForm";
import { NavBar } from "$components/NavBar";
import styles from "./styles.module.scss";

export const CreateVolunteer: FunctionComponent<ICreateVolunteerFormProps> = formValues => (
  <MainContent>
    <NavBar />
    <h1 className={styles.title}>Crear Voluntarie</h1>
    <CreateVolunteerForm {...formValues} />
  </MainContent>
);
