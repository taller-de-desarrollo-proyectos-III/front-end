import React, { FunctionComponent } from "react";
import { IVolunteer } from "$hooks/Volunteers";

export const VolunteerItem: FunctionComponent<IVolunteer> =
    ({firstName, surname, dni, commission}) => {
        return <tr>
            <td>
                <h5>{dni}</h5>
            </td>
            <td>
                <h5>{surname}</h5>
            </td>
            <td>
                <h5>{firstName}</h5>
            </td>
            <td>
                <h5>{commission}</h5>
            </td>
        </tr>;
    };
