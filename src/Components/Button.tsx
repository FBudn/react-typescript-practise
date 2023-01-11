import React from "react";
import { ButtonContainer } from "./Styles";

export interface ButtonProps {
  text: string;
  onClick?: any;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <ButtonContainer onClick={() => console.log(onClick)}>
      {text}
    </ButtonContainer>
  );
};

export default Button;

//onClick={() => handleValues}
