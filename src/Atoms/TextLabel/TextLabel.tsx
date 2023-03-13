import React from "react";
import { TextLabelContainer } from "./TextLabel.style";

export interface TextLabelProps {
  children: React.ReactNode;
  color: string;
  align: string;
  justify: string;
  fontWeight: string;
  fontSize: string;
  testId?: string;
  width?: string;
  margin?: string;
  cursor?: string;
}

const TextLabel: React.FC<TextLabelProps> = ({
  children,
  color,
  align,
  justify,
  fontWeight,
  fontSize,
  width,
  margin,
  cursor,
  testId,
}) => {
  return (
    <TextLabelContainer
      data-testid={testId}
      color={color}
      align={align}
      justify={justify}
      fontWeight={fontWeight}
      fontSize={fontSize}
      width={width}
      margin={margin}
      cursor={cursor}
    >
      {children}
    </TextLabelContainer>
  );
};

export default TextLabel;
