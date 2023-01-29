import React from "react";
import CheckboxInputStyle from "./CheckboxStyle";

export interface CheckboxInputProps {
  handleCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxBox: React.FC<CheckboxInputProps> = ({ handleCheckbox }) => {
  return <CheckboxInputStyle onChange={handleCheckbox} />;
};

export default CheckboxBox;
