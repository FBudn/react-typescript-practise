import React from "react";
import { CheckboxContainer } from "./Styles";

export interface CheckboxProps {
  text: string;
  handleCheckbox: any; //unikać any tylko stosować konkretne typy. Do funkcji jako typ () => void
}

const CheckboxPass: React.FC<CheckboxProps> = ({ text, handleCheckbox }) => {
  return (
    <CheckboxContainer>
      <input
        //checked={checkboxValue}
        onChange={handleCheckbox}
        name="checkboxValue"
        className="cursor-pointer" //nie to stylizowałem
        type="checkbox"
      />
      {text}
    </CheckboxContainer> //children prop sprawdzić jak działa
  );
};

export default CheckboxPass;
