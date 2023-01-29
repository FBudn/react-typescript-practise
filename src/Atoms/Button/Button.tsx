import React from "react";
import { ButtonContainer } from "./ButtonStyle";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

export default Button;
