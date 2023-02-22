import React from "react";
import { ButtonContainer } from "./ButtonStyle";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  storybookTesting?: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  storybookTesting,
}) => {
  return (
    <ButtonContainer style={storybookTesting} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
