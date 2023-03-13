import React from "react";
import { ButtonContainer } from "./Button.style";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  testId?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, testId }) => {
  return (
    <ButtonContainer data-testid={testId} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
