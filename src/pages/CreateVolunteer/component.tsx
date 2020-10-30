import React from "react";
import { FunctionComponent } from "react";
import { MainContent } from "../../components/MainContent";
import {
  CreateVolunteerForm,
  ICreateVolunteerFormProps
} from "../../components/CreateVolunteerForm";
import { NavBar } from "../../components/NavBar";

export const CreateVolunteer: FunctionComponent<ICreateVolunteerFormProps> = formValues => (
  <MainContent>
    <NavBar />
    <CreateVolunteerForm {...formValues} />
  </MainContent>
);
