import React from "react";
import { LinkButtonContainer } from "./LinkButton.style";

export interface LinkButtonProps {
  children: React.ReactNode;
  onClickLink: React.MouseEventHandler<HTMLButtonElement>;
  testId: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  onClickLink,
  testId,
}) => {
  return (
    <LinkButtonContainer data-testid={testId} onClick={onClickLink}>
      {children}
    </LinkButtonContainer>
  );
};

export default LinkButton;
