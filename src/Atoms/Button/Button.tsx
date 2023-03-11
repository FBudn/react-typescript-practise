import React from "react";
import { ButtonContainer } from "./Button.style";

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

/* 
Używam Buttona tylko ze zmienionym labelem, 
używam wszystkich propsów więc bym je zostawił. 
Nie wiem jak mógłbym go jeszcze reużywać, ewentualnie w innych wersjach kolorystycznych
Bo wrzutki zwykłe htmlowe są bez sensu jak to projekt Reactowy (html zamiast komponentu)
Z nazewnictwa może konktretniej onButtonClick/onClickButton zamiast samo onClick?
*/
