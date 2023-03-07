import React from "react";
import { LinkButtonStyled } from "./LinkButtonStyle";

export interface LinkButtonProps {
  children: React.ReactNode;
  onClickLink: React.MouseEventHandler<HTMLButtonElement>;
  testId?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  onClickLink,
  testId,
}) => {
  return (
    <LinkButtonStyled data-testid={testId} onClick={onClickLink}>
      {children}
    </LinkButtonStyled>
  );
};

export default LinkButton;
