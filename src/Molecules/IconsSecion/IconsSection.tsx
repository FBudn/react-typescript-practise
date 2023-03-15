import React from "react";
import { IconsContainer } from "./IconsSection.style";
import Icon from "../../Atoms/Icon/Icon";

export interface IconsSectionProps {
  onClickIcon: (i: string) => void;
  testId?: string;
  testIdIcon1?: string;
  testIdIcon2?: string;
  testIdIcon3?: string;
}

const IconsSection: React.FC<IconsSectionProps> = ({
  onClickIcon,
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
        onClickIcon={onClickIcon}
      />

      <Icon
        color="blue"
        icon="google"
        data-testid={testIdIcon2}
        onClickIcon={onClickIcon}
      />

      <Icon
        color="blue"
        icon="linkedin"
        data-testid={testIdIcon3}
        onClickIcon={onClickIcon}
      />
    </IconsContainer>
  );
};

export default IconsSection;
