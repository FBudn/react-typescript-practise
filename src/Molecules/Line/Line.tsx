import React from "react";
import { LineContainer, HrStyled, LineTextBox } from "./Line.style";

export interface LineProps {
  children: React.ReactNode;
  testId?: string;
  testIdHR?: string;
  testIdTextBox?: string;
}

const Line: React.FC<LineProps> = ({
  children,
  testId,
  testIdHR,
  testIdTextBox,
}) => {
  return (
    <LineContainer data-testid={testId}>
      <HrStyled data-testid={testIdHR} />
      <LineTextBox data-testid={testIdTextBox}>{children}</LineTextBox>
      <HrStyled />
    </LineContainer>
  );
};

export default Line;

/*
Używam raz z tym samym tekstem w projekcie więc niepotrzebny props tylko zakodowane by mogło być OR?
Ewentualnie inny sposób na zrobienie linii może jest lepszy. 
Reszta wydaje się ok, 
używam x2 
*/
