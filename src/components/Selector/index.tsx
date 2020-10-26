import React from "react";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import styles from "./styles.module.scss";

export const Selector = <Option,>(
  {
    onChange,
    options,
    getOptionLabel,
    selectedValue,
    getOptionId
  }: IComponentProps<Option>
) => (
  <FormControl className={styles.formControl}>
    <InputLabel className={styles.labelFilter}>Comisión</InputLabel>
    <Select
      value={selectedValue ? getOptionId(selectedValue): ""}
      onChange={event => onChange(event.target.value as string)}
    >
      {options.map(option => (
        <MenuItem
          key={getOptionId(option)}
          value={getOptionId(option)}
        >
          {getOptionLabel(option)}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

interface IComponentProps<Option> {
  onChange: (id: string) => void;
  options: Option[];
  selectedValue?: Option;
  getOptionLabel: (option: Option) => string;
  getOptionId: (option: Option) => string;
}
