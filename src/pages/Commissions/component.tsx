import React, { FunctionComponent } from "react";
import { ICommission } from "$hooks";
import { CommissionsTable } from "$components/CommissionsTable";
import { NavBar } from "$components/NavBar";
import { Title } from "$components/Title";
import { MainContent } from "$components/MainContent";

export const Commissions: FunctionComponent<IComponentProps> = ({ commissions }) => (
  <MainContent>
    <NavBar />
    <Title title={"Comisiones"} />
    <CommissionsTable commissions={commissions} />
  </MainContent>
);

interface IComponentProps {
  commissions: ICommission[];
}
