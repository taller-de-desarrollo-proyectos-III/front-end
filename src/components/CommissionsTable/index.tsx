import React, { FunctionComponent } from "react";
import { ICommission } from "$hooks";
import { Table } from "$components/Table";
import { CommissionItem } from "./CommissionItem";

export const CommissionsTable: FunctionComponent<IComponentProps> = ({ commissions }) => (
  <Table
    header={
      <>
        <th>NOMBRE</th>
        <th />
      </>
    }
    body={
      <>
        {commissions.map(item => (
          <CommissionItem key={item.uuid} {...item} />
        ))}
      </>
    }
  />
);

interface IComponentProps {
  commissions: ICommission[];
}
