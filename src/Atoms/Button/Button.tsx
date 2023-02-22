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
    <ButtonContainer onClick={onClick} style={storybookTesting}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
