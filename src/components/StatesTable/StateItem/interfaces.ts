import { IState } from "$hooks";

export interface IContainerProps {
  state: IState;
  readonly?: boolean;
}

export interface IComponentProps extends IContainerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
