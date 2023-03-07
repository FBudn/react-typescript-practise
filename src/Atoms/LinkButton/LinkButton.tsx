import React from "react";
import { LinkButtonStyled } from "./LinkButtonStyle";

export interface LinkButtonProps {
  children: React.ReactNode;
  onClickLink: React.MouseEventHandler<HTMLButtonElement>;
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, onClickLink }) => {
  return (
    <LinkButtonStyled data-testid="LinkButton-1" onClick={onClickLink}>
      {children}
    </LinkButtonStyled>
  );
};

export default LinkButton;
