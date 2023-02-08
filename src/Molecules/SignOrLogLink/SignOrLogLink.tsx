import React from "react";
import LinkButton from "../../Atoms/LinkButton/LinkButton";
import Label from "../../Atoms/TextLabel/TextLabel";
import { SignOrLogLinkContainer } from "./SignOrLogStyle";

export interface SignOrLogLinkProps {
  children: React.ReactNode;
  linkText: string;
  onClickLink: any;
}

const SignOrLogLink: React.FC<SignOrLogLinkProps> = ({
  children,
  linkText,
  onClickLink,
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
      <LinkButton onClickLink={onClickLink}>{linkText}</LinkButton>
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
