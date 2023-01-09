import React from "react";
import { SignOrLogLinkContainer } from "./Styles";
import { Link } from "react-router-dom";

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
      <Link className="underline" to={link}>
        {linkText}
      </Link>
    </SignOrLogLinkContainer>
  );
};

export default SignOrLogLink;
