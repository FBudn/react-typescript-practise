import React from "react";
import { LineContainer, HrStyled, LineTextBox } from "./LineStyle";

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
