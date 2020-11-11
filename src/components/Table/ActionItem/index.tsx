import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { Button } from "$components/Button";

export const ActionItem: FunctionComponent<IComponentProps> = ({ children, onClick }) => (
  <td className={styles.editVolunteer}>
    <Button className={styles.actionButton} onClick={onClick}>
      {children}
    </Button>
  </td>
);

interface IComponentProps {
  onClick: () => void;
}
