import React, { FunctionComponent, Fragment, useState } from "react";

import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const Selector: FunctionComponent<IComponent> = ({
  className,
  label,
  options,
  selectedOptions,
  setSelectedOptions,
  initialValues
}) => {
  const allOption = { uuid: "ALL", name: "TODOS" };
  const getOptions = () => {
    if (options.length === 0) return [];
    return [allOption].concat(options);
  };

  const getDefaultValue = () => {
    if (initialValues) return initialValues;
    if (options.length === 0) return [];
    if (options.length === selectedOptions.length) return [allOption];
    return selectedOptions;
  };

  const [defaultValue] = useState(getDefaultValue());

  return (
    <Autocomplete
      className={className}
      multiple
      defaultValue={defaultValue}
      options={getOptions()}
      disableCloseOnSelect
      getOptionSelected={(option, value) => option.uuid === value.uuid}
      onChange={(_, selected) => setSelectedOptions(selected)}
      getOptionLabel={option => option.name}
      renderOption={(option, state) => {
        const all = selectedOptions.find(selected => selected.uuid === "ALL");
        if (all) state.selected = true;

        return (
          <Fragment>
            <Checkbox icon={icon} checkedIcon={checkedIcon} checked={state.selected} />
            {option.name}
          </Fragment>
        );
      }}
      renderInput={params => (
        <TextField {...params} variant="outlined" label={label} placeholder={label} />
      )}
    />
  );
};

interface IOption {
  uuid: string;
  name: string;
}

interface IComponent {
  label: string;
  className?: string;
  options: IOption[];
  selectedOptions: IOption[];
  initialValues?: IOption[];
  setSelectedOptions: (options: IOption[]) => void;
}
