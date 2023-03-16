import React from "react";
import Line from "../../Molecules/Line/Line";
import Icons from "../../Molecules/IconsSecion/IconsSection";
import {
  FooterContainer,
  TextLabelAndLinkButtonContainer,
} from "./Footer.styled";
import LinkButton from "../../Atoms/LinkButton/LinkButton";
import TextLabel from "../../Atoms/TextLabel/TextLabel";
import TestIcon from "../../Atoms/TestIcon";

export interface FooterProps {
  infoText: string;
  linkText: string;
  lineText: string;
  onClickIcon: (i: string) => void;
  onClickLink: React.MouseEventHandler<HTMLButtonElement>;
  testId?: string;
}

const Footer: React.FC<FooterProps> = ({
  infoText,
  linkText,
  lineText,
  onClickIcon,
  onClickLink,
  testId,
}) => {
  return (
    <FooterContainer data-testid={testId}>
      <Line>{lineText}</Line>
      <Icons onClickIcon={onClickIcon} />
      <TestIcon onClickIcon={onClickIcon} />
      <TextLabelAndLinkButtonContainer>
        <TextLabel
          color="rgb(82 82 91)"
          align="center"
          justify="cener"
          fontSize="1.1rem"
          fontWeight="400"
        >
          {infoText}
        </TextLabel>
        <LinkButton
          onClickLink={onClickLink}
          testId="test-Footer-linkButton-id"
        >
          {linkText}
        </LinkButton>
      </TextLabelAndLinkButtonContainer>
    </FooterContainer>
  );
};

export default Footer;
