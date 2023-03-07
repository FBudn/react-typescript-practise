import React from "react";
import { ButtonContainer } from "./ButtonStyle";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  testId?: string;
  // storybookTesting?: any; storybookTesting, style={storybookTesting}
}

const Button: React.FC<ButtonProps> = ({ children, onClick, testId }) => {
  return (
    <ButtonContainer data-testid={testId} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
