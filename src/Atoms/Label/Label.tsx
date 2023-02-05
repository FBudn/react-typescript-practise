import React from "react";
import { LabelContainer } from "./LabelStyle";

export interface LabelProps {
  children: string;
  color: string;
  align: string;
  justify: string;
  fontWeight: string;
  fontSize: string;
}

const Label: React.FC<LabelProps> = ({
  children,
  color,
  align,
  justify,
  fontWeight,
  fontSize,
}) => {
  return (
    <LabelContainer
      color={color}
      align={align}
      justify={justify}
      fontWeight={fontWeight}
      fontSize={fontSize}
    >
      {" "}
      {children}{" "}
    </LabelContainer>
  );
};

export default Label;
