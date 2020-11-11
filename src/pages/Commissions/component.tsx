import React, { FunctionComponent } from "react";
import { ICommission } from "$hooks";
import { CommissionsTable } from "$components/CommissionsTable";
import { NavBar } from "$components/NavBar";
import { Title } from "$components/Title";
import { MainContent } from "$components/MainContent";
import styles from "./styles.module.scss";

export const Commissions: FunctionComponent<IComponentProps> = ({ commissions }) => (
  <MainContent>
    <NavBar />
    <div className={styles.body}>
      <Title className={styles.title} title={"Listado de comisiones"} />
      <CommissionsTable className={styles.table} commissions={commissions} />
    </div>
  </MainContent>
);

interface IComponentProps {
  commissions: ICommission[];
}
