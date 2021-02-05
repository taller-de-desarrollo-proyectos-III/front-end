import React, { FunctionComponent } from "react";
import { DialogForm, IValues } from "$components/DialogForm";

export const CreateOrUpdateFormDialog: FunctionComponent<ContainerProps> = props => {
  const onSubmit = async (values: IValues) => {
    if (props.update) {
      await props.useCreateOrUpdate().createOrUpdate({ uuid: props.initialValues.uuid, ...values });
    }
    if (!props.update) await props.useCreateOrUpdate().createOrUpdate(values);
    props.onClose();
  };

  return (
    <DialogForm
      withDescription={props.withDescription}
      title={props.title}
      isOpen={props.isOpen}
      onClose={props.onClose}
      initialValues={props.initialValues}
      onSubmit={onSubmit}
    />
  );
};

type UpdateValues = IValues & { uuid: string };

interface ICommonProps {
  title: string;
  withDescription: boolean;
  isOpen: boolean;
  onClose: () => void;
  update: boolean;
}

interface ICreateProps extends ICommonProps {
  update: false;
  initialValues: IValues;
  useCreateOrUpdate: () => { createOrUpdate: (values: IValues) => Promise<void> };
}

interface IUpdateProps extends ICommonProps {
  update: true;
  initialValues: UpdateValues;
  useCreateOrUpdate: () => { createOrUpdate: (values: UpdateValues) => Promise<void> };
}

type ContainerProps = ICreateProps | IUpdateProps;
