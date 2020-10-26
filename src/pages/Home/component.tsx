import React, { FunctionComponent } from "react";
import { VolunteersTable } from "$components/VolunteersTable";
import { MainContent } from "$components/MainContent";
import { NavBar } from "$components/NavBar";
import { NavBarVolunteerList } from "$components/NavBarVoluntariesList";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { IVolunteer, ICommission } from "$hooks";

import styles from "./styles.module.scss";

export const Home: FunctionComponent<IComponentProps> = (
  {
    commission,
    volunteers,
    commissions,
    setCommissionUuid
  }
) => (
  <MainContent>
    <NavBar/>
    <NavBarVolunteerList />
    <div className={styles.tableContainer}>
      <FormControl className={styles.formControl}>
        <InputLabel className={styles.labelFilter}>Comisión</InputLabel>
        <Select
          value={commission?.uuid || ""}
          onChange={event => setCommissionUuid(event.target.value as string)}
        >
          {commissions.map(({ uuid, name }) => (
            <MenuItem value={uuid} key={uuid}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <VolunteersTable volunteers={volunteers} />
    </div>
  </MainContent>
);

interface IComponentProps {
  setCommissionUuid: (uuid: string) => void;
  volunteers: IVolunteer[];
  commissions: ICommission[];
  commission?: ICommission;
}
