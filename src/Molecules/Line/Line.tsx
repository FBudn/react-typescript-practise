import React from "react";
import { LineContainer, HrStyled, LineTextBox } from "./Line.style";

export interface LineProps {
  children: React.ReactNode;
  testId?: string;
}

const Line: React.FC<LineProps> = ({ children, testId }) => {
  return (
    <LineContainer data-testid={testId}>
      <HrStyled data-testid="test-Line-HRStyled" />
      <LineTextBox data-testid="test-Line-LineTextBox">{children}</LineTextBox>
      <HrStyled />
    </LineContainer>
  );
};

export default Line;
