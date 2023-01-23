import React from "react";
import { ButtonContainer } from "./Styles";

export interface ButtonProps {
  text: string;
  onClick: () => void;
  // checkboxValue: any;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <ButtonContainer onClick={onClick}>{text}</ButtonContainer>;
};

export default Button;

// onClick={() => handleValues}
// tu w funkcji ktora przekazuje do Buttona mogę sobie spiąć w obiekt stany email itd zeby wyswietlic w 1
