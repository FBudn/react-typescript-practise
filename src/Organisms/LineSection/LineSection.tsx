import React from "react";
import SignOrLogLink from "../../Molecules/SignOrLogLink/SignOrLogLink";
import Line from "../../Molecules/Line/Line";
import Icons from "../../Molecules/IconsSecion/IconsSection";

export interface LineSectionProps {
  children: string;
  linkText: string;
  lineText: string;
  onClickIcon: any;
  logs: any;
  onClickLink: any;
}

const LineSection: React.FC<LineSectionProps> = ({
  children,
  linkText,
  lineText,
  onClickIcon,
  logs,
  onClickLink,
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
      <SignOrLogLink linkText={linkText} onClickLink={onClickLink}>
        {children}
      </SignOrLogLink>
    </>
  );
};

export default LineSection;

/*
Znów nazwa folder-plik
*/
