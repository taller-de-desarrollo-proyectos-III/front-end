import { IRole } from "$hooks";

export interface IContainerProps {
  role: IRole;
  readonly?: boolean;
}

export interface IComponentProps extends IContainerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
