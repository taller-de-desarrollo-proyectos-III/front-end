import React from "react";
import { IVolunteer } from "$hooks";
import styles from "./styles.module.scss";

interface VolunteersProps {
    volunteers: IVolunteer[];
}

export const Volunteers: React.FC<VolunteersProps> = ({volunteers}: VolunteersProps) => {
    return <div className={styles.tableOverview}>
        <table>
            <tbody>
            <tr className={styles.tableHeader}>
                <td>
                    <h4>NÚMERO DE DOCUMENTO</h4>
                </td>
                <td>
                    <h4>APELLIDO</h4>
                </td>
                <td>
                    <h4>NOMBRE</h4>
                </td>
                <td>
                    <h4>COMISIÓN</h4>
                </td>
            </tr>
            {volunteers.map(item => {
                return <VolunteerItem
                        uuid = {item.uuid}
                        firstName = {item.firstName}
                        lastName = { item.lastName}
                        documentNumber = {item.documentNumber}
                        commission = {item.commission}>
                    </VolunteerItem>;
            })}
            </tbody>
        </table>
    </div>;
};

const VolunteerItem: React.FC<IVolunteer> =
    ({firstName, lastName, documentNumber, commission}: IVolunteer) => {

    return <tr>
        <td>
            <h5>{documentNumber}</h5>
        </td>
        <td>
            <h5>{lastName}</h5>
        </td>
        <td>
            <h5>{firstName}</h5>
        </td>
        <td>
            <h5>{commission}</h5>
        </td>
    </tr>;
};

