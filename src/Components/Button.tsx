import React from "react";
import { ButtonContainer } from "./Styles";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  // checkboxValue: any;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

export default Button;

// onClick={() => handleValues}1 kolejny test2
// tu w funkcji ktora przekazuje do Buttona mogę sobie spiąć w obiekt stany email itd zeby wyswietlic w 1
