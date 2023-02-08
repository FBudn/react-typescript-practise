import React from "react";
import { Link } from "react-router-dom";
import Label from "../../Atoms/TextLabel/TextLabel";
import { SignOrLogLinkContainer } from "./SignOrLogStyle";

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
      <Label
        color="rgb(82 82 91)"
        align="center"
        justify="cener"
        fontSize="1.1rem"
        fontWeight="400"
      >
        {children}
      </Label>
      <Link to={link}>{linkText}</Link>
    </SignOrLogLinkContainer>
  );
};

export default SignOrLogLink;

/*
Jakbym tu miał labela z tekstem to mógłbym go wykorzystać tu do tekstu i pytania i mógłbym mieć komponent do linka a tu to sklejone

Zrobić komponent link, który będzie przyciskiem chociaż bd linkiem i mogę do niego podpiąć funkcje i w jego deklaracji na samej górze
mogę użyć useNavigate
Dążymy by jedyny import z routera był na poziomie Page
*/
