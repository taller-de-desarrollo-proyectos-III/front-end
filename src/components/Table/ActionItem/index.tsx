import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { Button } from "$components/Button";
import { TableItem } from "$components/Table/TableItem";

export const ActionItem: FunctionComponent<IComponentProps> = ({ children, onClick }) => (
  <TableItem className={styles.editVolunteer}>
    <Button className={styles.actionButton} onClick={onClick}>
      {children}
    </Button>
  </TableItem>
);

interface IComponentProps {
  onClick: () => void;
}
