import React from "react";
import { LabelContainer } from "./TextLabelStyle";

export interface LabelProps {
  children: React.ReactNode;
  color: string;
  align: string;
  justify: string;
  fontWeight: string;
  fontSize: string;
  width?: string;
  margin?: string;
}

const TextLabel: React.FC<LabelProps> = ({
  children,
  color,
  align,
  justify,
  fontWeight,
  fontSize,
  width,
  margin,
}) => {
  return (
    <LabelContainer
      color={color}
      align={align}
      justify={justify}
      fontWeight={fontWeight}
      fontSize={fontSize}
      width={width}
      margin={margin}
    >
      {children}
    </LabelContainer>
  );
};

export default TextLabel;
