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
}

const LineSection: React.FC<LineSectionProps> = ({
  children,
  linkText,
  link,
  lineText,
  onClickIcon,
}) => {
  return (
    <>
      <Line>{lineText}</Line>
      <Icons onClickIcon={onClickIcon} />
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
