import React from "react";
import { LinkButtonContainer } from "./LinkButton.style";

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
    <LinkButtonContainer data-testid={testId} onClick={onClickLink}>
      {children}
    </LinkButtonContainer>
  );
};

export default LinkButton;

/*
Tu mam np. LinkButtonStyled nazwanego diva a w innych komponentach LinkButtonContainer np.
to ewentualnie to do ujednolicenia pewnie
Używam tego x2 po 1 w page. Myślę, że ze względu na funkcjonalność takie propsy są ok
Nazewnictwo też chyba ok
Nie ma typów "any" 
*/
