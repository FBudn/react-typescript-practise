import React from "react";
import { ButtonContainer } from "./ButtonStyle";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  // storybookTesting?: any; storybookTesting, style={storybookTesting}
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

export default Button;
