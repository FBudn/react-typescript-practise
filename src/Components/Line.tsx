import React from "react";
import { LineContainer, HrStyled, LineTextBox } from "./Styles";

export interface LineProps {
  children: React.ReactNode;
}

const Line: React.FC<LineProps> = ({ children }) => {
  return (
    <LineContainer>
      <HrStyled />
      <LineTextBox>{children}</LineTextBox>
      <HrStyled />
    </LineContainer>
  );
};

export default Line;
