import React from "react";
import { IconsContainer } from "./IconsSection.style";
import Icon from "../../Atoms/Icon/Icon";

export interface IconsSectionProps {
  onClickIcon: (icon: string) => void;
  testId?: string;
}

const IconsSection: React.FC<IconsSectionProps> = ({ onClickIcon, testId }) => {
  const handleIcon1Click = () => {
    onClickIcon(`Facebook`);
  };
  const handleIcon2Click = () => {
    onClickIcon(`Google`);
  };
  const handleIcon3Click = () => {
    onClickIcon(`LinkedIn`);
  };

  return (
    <IconsContainer data-testid={testId}>
      <Icon
        color="red"
        icon="facebook"
        testId="test-icon1-id"
        onClickIcon={handleIcon1Click}
      />

      <Icon
        color="blue"
        icon="google"
        testId="test-icon2-id"
        onClickIcon={handleIcon2Click}
      />

      <Icon
        color="blue"
        icon="linkedin"
        testId="test-icon3-id"
        onClickIcon={handleIcon3Click}
      />
    </IconsContainer>
  );
};

export default IconsSection;
