import React, { FunctionComponent } from "react";
import { VolunteersTable } from "$components/VolunteersTable";
import { MainContent } from "$components/MainContent";
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
        volunteersList,
        commissionList,
        setCommission
    }
) => (
    <MainContent>
        <NavBarVolunteerList />
        <div>
            <FormControl className={styles.buttonFormControl}>
                <InputLabel className={styles.labelFilter}>Comisión</InputLabel>
                <Select
                    value={commission}
                    onChange={event => setCommission(event.target.value as string)}
                >
                    {commissionList.map(item => (
                        <MenuItem value = {item.name}> {item.name} </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <VolunteersTable volunteers={volunteersList}/>
        </div>
    </MainContent>
);

interface IComponentProps {
  setCommission: (commission:string) => void;
  volunteersList: IVolunteer[];
  commissionList: ICommission[];
  commission?: string;
}
