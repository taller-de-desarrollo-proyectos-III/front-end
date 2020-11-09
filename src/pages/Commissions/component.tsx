import React, { FunctionComponent } from "react";
import { ICommission } from "$hooks";
import { NavBar } from "$components/NavBar";
import { Title } from "$components/Title";
import { MainContent } from "$components/MainContent";

export const Commissions: FunctionComponent<IComponentProps> = () => (
  <MainContent>
    <NavBar />
    <Title title={"Comisiones"} />
  </MainContent>
);

interface IComponentProps {
  commissions: ICommission[];
}
