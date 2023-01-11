import React, { useState } from "react";
import { CheckboxContainer } from "./Styles";

export interface CheckboxProps {
  text: string;
  handleCheckbox: any;
}

const CheckboxPass: React.FC<CheckboxProps> = ({ text, handleCheckbox }) => {
  return (
    <CheckboxContainer>
      <input
        //checked={checkboxValue}
        onChange={handleCheckbox}
        name="checkboxValue"
        className="cursor-pointer"
        type="checkbox"
      />
      {text}
    </CheckboxContainer>
  );
};

export default CheckboxPass;
