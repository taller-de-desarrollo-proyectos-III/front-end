import React from "react";
import { FunctionComponent } from "react";
import { MainContent } from "$components/MainContent";
import { Title } from "$components/Title";
import { CreateVolunteerForm, ICreateVolunteerFormProps } from "$components/CreateVolunteerForm";
import { NavBar } from "$components/NavBar";

export const EditVolunteer: FunctionComponent<ICreateVolunteerFormProps> = formValues => (
  <MainContent>
    <NavBar />
    <Title title={"Editar Voluntarie"} />
    <CreateVolunteerForm {...formValues} />
  </MainContent>
);
