import React from "react";
import SignOrLogLink from "../../Molecules/SignOrLogLink/SignOrLogLink";
import Line from "../../Molecules/Line/Line";
import Icons from "../../Molecules/IconsSecion/Icons";

export interface LineSectionProps {
  children: string;
  linkText: string;
  link: string;
  lineText: string;
}

const LineSection: React.FC<LineSectionProps> = ({
  children,
  linkText,
  link,
  lineText,
}) => {
  return (
    <>
      <Line>{lineText}</Line>
      <Icons />
      <SignOrLogLink linkText={linkText} link={link}>
        {children}
      </SignOrLogLink>
    </>
  );
};

export default LineSection;
