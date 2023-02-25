import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { IconsContainerMain } from "./IconsSectionStyle";
import Icon from "../../Atoms/Icon/Icon";

const facebook = <FontAwesomeIcon icon={faFacebookF} />;
const google = <FontAwesomeIcon icon={faGoogle} />;
const linkedin = <FontAwesomeIcon icon={faLinkedinIn} />;

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
        onClickIcon={() => {
          onClickIcon(firstIconText, logs);
        }}
      >
        {google}
      </Icon>

      <Icon
        color="blue"
        onClickIcon={() => {
          onClickIcon(secondIconText, logs);
        }}
      >
        {facebook}
      </Icon>

      <Icon
        color="blue"
        onClickIcon={() => {
          onClickIcon(thirdIconText, logs);
        }}
      >
        {linkedin}
      </Icon>
    </IconsContainerMain>
  );
};

export default IconsSection;

/*
Przerobienie tego bo wszelka logika na samej górze w page 
i ogarnąć już funkcje
znowu nazwy folderów 
*/
