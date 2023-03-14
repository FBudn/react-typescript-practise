import React from "react";
import Line from "../../Molecules/Line/Line";
import Icons from "../../Molecules/IconsSecion/IconsSection";
import {
  LineSectionContainer,
  TextLabelAndLinkButtonContainer,
} from "./LineSection.styled";
import LinkButton from "../../Atoms/LinkButton/LinkButton";
import TextLabel from "../../Atoms/TextLabel/TextLabel";

export interface LineSectionProps {
  infoText: string;
  linkText: string;
  lineText: string;
  onClickIcon: (number: number, logs: string[]) => void;
  logs: string[];
  onClickLink: React.MouseEventHandler<HTMLButtonElement>;
  testId?: string;
  testIdButton?: string;
}

const LineSection: React.FC<LineSectionProps> = ({
  infoText,
  linkText,
  lineText,
  onClickIcon,
  logs,
  onClickLink,
  testId,
}) => {
  return (
    <LineSectionContainer data-testid={testId}>
      <Line>{lineText}</Line>
      <Icons
        onClickIcon={onClickIcon}
        firstIconText={0}
        secondIconText={1}
        thirdIconText={2}
        logs={logs}
      />
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
        <LinkButton onClickLink={onClickLink} testId="test-linkButton-id">
          {linkText}
        </LinkButton>
      </TextLabelAndLinkButtonContainer>
    </LineSectionContainer>
  );
};

export default LineSection;
