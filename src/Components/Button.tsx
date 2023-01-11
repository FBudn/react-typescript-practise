import React from "react";
import { ButtonContainer } from "./Styles";

export interface ButtonProps {
  text: string;
  onClick?: any;
  checkboxValue?: any;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, checkboxValue }) => {
  return (
    <ButtonContainer
      onClick={() => console.log(onClick, "         ", checkboxValue)}
    >
      {text}
    </ButtonContainer>
  );
};

export default Button;

//onClick={() => handleValues}
