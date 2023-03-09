import React from "react";
import SignOrLogLink from "../../Molecules/SignOrLogLink/SignOrLogLink";
import Line from "../../Molecules/Line/Line";
import Icons from "../../Molecules/IconsSecion/IconsSection";
import { LineSectionContainer } from "./LineSectionStyled";

export interface LineSectionProps {
  children: string;
  linkText: string;
  lineText: string;
  onClickIcon: (number: number, logs: string[]) => void;
  logs: string[];
  onClickLink: React.MouseEventHandler<HTMLButtonElement>;
  testId?: string;
  testIdButton?: string;
}

const LineSection: React.FC<LineSectionProps> = ({
  children,
  linkText,
  lineText,
  onClickIcon,
  logs,
  onClickLink,
  testId,
  testIdButton,
}) => {
  return (
    <LineSectionContainer data-testid={testId}>
      <Line>{lineText}</Line>
      <Icons
        onClickIcon={onClickIcon}
        firstIconText={0}
        secondIconText={1}
        thirdIconText={2}
        logs={logs}
      />
      <SignOrLogLink
        linkText={linkText}
        onClickLink={onClickLink}
        testIdButton={testIdButton}
      >
        {children}
      </SignOrLogLink>
    </LineSectionContainer>
  );
};

export default LineSection;

/*
Znów nazwa folder-plik
*/
