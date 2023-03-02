import React from "react";
import { IconsContainerMain } from "./IconsSectionStyle";
import Icon from "../../Atoms/Icon/Icon";

export interface IconsSectionProps {
  onClickIcon: (number: number, logs: []) => void;
  firstIconText: number;
  secondIconText: number;
  thirdIconText: number;
  logs: any;
}

const IconsSection: React.FC<IconsSectionProps> = ({
  onClickIcon,
  firstIconText,
  secondIconText,
  thirdIconText,
  logs,
}) => {
  return (
    <IconsContainerMain>
      <Icon
        color="red"
        icon="facebook"
        onClickIcon={() => {
          onClickIcon(firstIconText, logs);
        }}
      />

      <Icon
        color="blue"
        icon="google"
        onClickIcon={() => {
          onClickIcon(secondIconText, logs);
        }}
      />

      <Icon
        color="blue"
        icon="linkedin"
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
