import React from "react";
import LinkButton from "../../Atoms/LinkButton/LinkButton";
import Label from "../../Atoms/TextLabel/TextLabel";
import { SignOrLogLinkContainer } from "./SignOrLog.style";

export interface SignOrLogLinkProps {
  children: React.ReactNode;
  linkText: string;
  onClickLink: React.MouseEventHandler<HTMLButtonElement>;
  testId?: string;
  testIdButton?: string;
  testIdLabel?: string;
}

const SignOrLogLink: React.FC<SignOrLogLinkProps> = ({
  children,
  linkText,
  onClickLink,
  testId,
  testIdButton,
  testIdLabel,
}) => {
  return (
    <SignOrLogLinkContainer data-testid={testId}>
      <Label
        color="rgb(82 82 91)"
        align="center"
        justify="cener"
        fontSize="1.1rem"
        fontWeight="400"
        testId={testIdLabel}
      >
        {children}
      </Label>
      <LinkButton onClickLink={onClickLink} testId={testIdButton}>
        {linkText}
      </LinkButton>
    </SignOrLogLinkContainer>
  );
};

export default SignOrLogLink;
