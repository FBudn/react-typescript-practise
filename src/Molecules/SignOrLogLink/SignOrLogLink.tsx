import React from "react";
import { Link } from "react-router-dom";
import { SignOrLogLinkContainer } from "../../Components/Styles";

export interface SignOrLogLinkProps {
  children: React.ReactNode;
  linkText: string;
  link: string;
}

const SignOrLogLink: React.FC<SignOrLogLinkProps> = ({
  children,
  linkText,
  link,
}) => {
  return (
    <SignOrLogLinkContainer>
      {children}
      <Link to={link}>{linkText}</Link>
    </SignOrLogLinkContainer>
  );
};

export default SignOrLogLink;
