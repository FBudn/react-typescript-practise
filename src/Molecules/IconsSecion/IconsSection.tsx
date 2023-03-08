import React from "react";
import { IconsContainerMain } from "./IconsSectionStyle";
import Icon from "../../Atoms/Icon/Icon";

export interface IconsSectionProps {
  onClickIcon: (number: number, logs: []) => void;
  firstIconText: number;
  secondIconText: number;
  thirdIconText: number;
  logs: any;
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
    <IconsContainerMain data-testid={testId}>
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
    </IconsContainerMain>
  );
};

export default IconsSection;

/*
Przerobienie tego bo wszelka logika na samej górze w page 
i ogarnąć już funkcje
znowu nazwy folderów 
*/
