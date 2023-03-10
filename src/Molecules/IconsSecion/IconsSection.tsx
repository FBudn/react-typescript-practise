import React from "react";
import { IconsContainer } from "./IconsSection.style";
import Icon from "../../Atoms/Icon/Icon";

export interface IconsSectionProps {
  onClickIcon: (number: number, logs: string[]) => void;
  firstIconText: number;
  secondIconText: number;
  thirdIconText: number;
  logs: string[];
  testId?: string;
  testIdIcon1?: string;
  testIdIcon2?: string;
  testIdIcon3?: string;
}

const IconsSection: React.FC<IconsSectionProps> = ({
  onClickIcon,
  firstIconText,
  secondIconText,
  thirdIconText,
  logs,
  testId,
  testIdIcon1,
  testIdIcon2,
  testIdIcon3,
}) => {
  return (
    <IconsContainer data-testid={testId}>
      <Icon
        color="red"
        icon="facebook"
        data-testid={testIdIcon1}
        onClickIcon={() => {
          onClickIcon(firstIconText, logs);
        }}
      />

      <Icon
        color="blue"
        icon="google"
        data-testid={testIdIcon2}
        onClickIcon={() => {
          onClickIcon(secondIconText, logs);
        }}
      />

      <Icon
        color="blue"
        icon="linkedin"
        data-testid={testIdIcon3}
        onClickIcon={() => {
          onClickIcon(thirdIconText, logs);
        }}
      />
    </IconsContainer>
  );
};

export default IconsSection;
