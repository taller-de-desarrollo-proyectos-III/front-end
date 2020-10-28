import React from "react";
import { FunctionComponent } from "react";
import { MainContent } from "../../components/MainContent";
import { AddVolunteerForm } from "../../components/AddVolunteerForm";
import { NavBar } from "../../components/NavBar";

export const AddVolunteer: FunctionComponent = () => (
  <MainContent>
    <NavBar />
    <AddVolunteerForm />
  </MainContent>
);
