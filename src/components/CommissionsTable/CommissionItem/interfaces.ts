import { ICommission } from "$hooks";

export interface IContainerProps {
  commission: ICommission;
  readonly?: boolean;
}

export interface IComponentProps extends IContainerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
