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

import { forwardRef } from "react";
import { CheckboxInputStyle } from "./CheckboxInputStyle";

const CheckboxInput = forwardRef(function CheckboxInput(props, ref) {
  const  onChangeCheckbox  = props;

  return (
  <CheckboxInputStyle onChange={onChangeCheckbox} ref={ref} />;
);
});

export default CheckboxInput;
*/
