import React from "react";
import SignOrLogLink from "../../Molecules/SignOrLogLink/SignOrLogLink";
import Line from "../../Molecules/Line/Line";
import Icons from "../../Molecules/IconsSecion/Icons";

export interface LineSectionProps {
  signOrLogText: string;
  linkText: string;
  link: string;
  lineText: string;
}

const LineSection: React.FC<LineSectionProps> = ({
  signOrLogText,
  linkText,
  link,
  lineText,
}) => {
  return (
    <>
      <Line>{lineText}</Line>
      <Icons />
      <SignOrLogLink linkText={linkText} link={link}>
        {signOrLogText}
      </SignOrLogLink>
    </>
  );
};

export default LineSection;
