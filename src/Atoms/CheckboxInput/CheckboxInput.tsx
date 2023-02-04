import React from "react";
import { CheckboxInputStyle } from "./CheckboxInputStyle";

export interface CheckboxInputProps {
  onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxBox: React.FC<CheckboxInputProps> = ({ onChangeCheckbox }) => {
  return <CheckboxInputStyle onChange={onChangeCheckbox} />;
};

export default CheckboxBox;

/*
onChange na poziomie atomu z nazwą też onChangeCośtam
*/
