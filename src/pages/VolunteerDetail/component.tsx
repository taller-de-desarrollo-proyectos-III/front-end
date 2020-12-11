import React, { FunctionComponent } from "react";
import { IVolunteer } from "$hooks/Volunteers";
import { MainContent } from "$components/MainContent";
import { NavBar } from "$components/NavBar";
import { Title } from "$components/Title";
import { VolunteerPersonalCard } from "$components/VolunteerPersonalCard";
import styles from "./styles.module.scss";
import linkedinLogo from "$images/LI-In-Bug.png";
import { Button } from "$components/Button";

export const VolunteerDetail: FunctionComponent<IComponentProps> = ({ volunteer, onClickEdit }) => (
  <MainContent>
    <NavBar />
    <div className={styles.titleContainer}>
      <Title title={`${volunteer?.name} ${volunteer?.surname}`} />
      {volunteer?.linkedin && (
        <a
          className={styles.linkedinLink}
          href={volunteer?.linkedin}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <img className={styles.linkedinLogo} src={linkedinLogo} alt="linkedin-logo" />
        </a>
      )}
      <Button className={styles.button} onClick={onClickEdit}>
        Editar
      </Button>
    </div>
    <VolunteerPersonalCard volunteer={volunteer} />
  </MainContent>
);

interface IComponentProps {
  volunteer?: IVolunteer;
  onClickEdit: () => void;
}
