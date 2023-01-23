import React from "react";
import { LineContainer, HrStyled, LineTextBox } from "./Styles";

export interface LineProps {
  text: string;
}

const Line: React.FC<LineProps> = ({ text }) => {
  return (
    <LineContainer>
      <HrStyled />
      <LineTextBox>{text}</LineTextBox>
      <HrStyled />
    </LineContainer>
  );
};

export default Line;
