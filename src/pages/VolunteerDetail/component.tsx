import React, { FunctionComponent } from "react";
import { IVolunteer } from "$hooks/Volunteers";
import { MainContent } from "$components/MainContent";
import { NavBar } from "$components/NavBar";
import { Title } from "$components/Title";
import { VolunteerPersonalCard } from "$components/VolunteerPersonalCard";
import styles from "./styles.module.scss";
import linkedinLogo from "$images/LI-In-Bug.png";
import { Button } from "$components/Button";
import { RoutesBuilder } from "$models";
import { useHistory } from "react-router-dom";

export const VolunteerDetail: FunctionComponent<IVolunteer> = volunteer => {
  const history = useHistory();
  return (
    <MainContent>
      <NavBar />
      <div className={styles.titleContainer}>
        <Title title={`${volunteer.name} ${volunteer.surname}`} />
        {volunteer.linkedin && (
          <a href={volunteer.linkedin} target={"_blank"} rel={"noopener noreferrer"}>
            <img className={styles.linkedinLogo} src={linkedinLogo} />
          </a>
        )}
        <Button
          className={styles.button}
          onClick={() => history.push(RoutesBuilder.volunteers.edit(volunteer.uuid))}
        >
          Editar
        </Button>
      </div>
      <VolunteerPersonalCard
        dni={volunteer.dni}
        email={volunteer.email}
        phoneNumber={volunteer.phoneNumber}
        telegram={volunteer.telegram}
        admissionYear={volunteer.admissionYear}
        graduationYear={volunteer.graduationYear}
        country={volunteer.country}
        commissions={volunteer.commissions}
      />
    </MainContent>
  );
};
