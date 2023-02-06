import React from "react";
import SignOrLogLink from "../../Molecules/SignOrLogLink/SignOrLogLink";
import Line from "../../Molecules/Line/Line";
import Icons from "../../Molecules/IconsSecion/IconsSection";

export interface LineSectionProps {
  children: string;
  linkText: string;
  link: string;
  lineText: string;
  onClickIcon: any;
  logs: any;
}

const LineSection: React.FC<LineSectionProps> = ({
  children,
  linkText,
  link,
  lineText,
  onClickIcon,
  logs,
}) => {
  return (
    <>
      <Line>{lineText}</Line>
      <Icons
        onClickIcon={onClickIcon}
        firstIconText={0}
        secondIconText={1}
        thirdIconText={2}
        logs={logs}
      />
      <SignOrLogLink linkText={linkText} link={link}>
        {children}
      </SignOrLogLink>
    </>
  );
};

export default LineSection;

/*
Znów nazwa folder-plik
*/
