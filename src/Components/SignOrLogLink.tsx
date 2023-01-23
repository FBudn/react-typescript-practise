import React from "react";
import { Link } from "react-router-dom";
import { SignOrLogLinkContainer } from "./Styles";

export interface SignOrLogLinkProps {
  questionText: string;
  linkText: string;
  link: string;
}

const SignOrLogLink: React.FC<SignOrLogLinkProps> = ({
  questionText,
  linkText,
  link,
}) => {
  return (
    <SignOrLogLinkContainer>
      <div>{questionText}</div>
      <Link to={link}>{linkText}</Link>
    </SignOrLogLinkContainer>
  );
};

export default SignOrLogLink;
