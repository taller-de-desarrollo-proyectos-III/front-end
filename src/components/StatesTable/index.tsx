import React, { FunctionComponent } from "react";
import { IState } from "$hooks";
import { Table } from "$components/Table";
import { TableHeader } from "$components/Table/TableHeader";
import { TableItem } from "$components/Table/TableItem";
import { TableBody } from "$components/Table/TableBody";
import { StateItem } from "./StateItem";

export const StatesTable: FunctionComponent<IComponentProps> = ({
  states,
  className,
  readonly
}) => (
  <Table className={className}>
    <TableHeader>
      <TableItem>NOMBRE</TableItem>
      {!readonly && <TableItem />}
    </TableHeader>
    <TableBody>
      {states.map(state => (
        <StateItem readonly={readonly} key={state.uuid} state={state} />
      ))}
    </TableBody>
  </Table>
);

interface IComponentProps {
  readonly?: boolean;
  className?: string;
  states: IState[];
}
