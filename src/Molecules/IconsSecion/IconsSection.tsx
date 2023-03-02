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

const IconsList = {
  IconFacebook: facebook,
  IconGoogle: google,
  IconLinkedIn: linkedin,
} as const;

const IconsListTypes = {
  IconFacebook: `facebook`,
  IconGoogle: `google`,
  IconLinkedIn: `linkedin`,
} as const;

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
        name={IconsListTypes.IconGoogle}
        onClickIcon={() => {
          onClickIcon(firstIconText, logs);
        }}
      >
        {IconsList.IconGoogle}
      </Icon>

      <Icon
        color="blue"
        name={IconsListTypes.IconFacebook}
        onClickIcon={() => {
          onClickIcon(secondIconText, logs);
        }}
      >
        {IconsList.IconFacebook}
      </Icon>

      <Icon
        color="blue"
        name={IconsListTypes.IconLinkedIn}
        onClickIcon={() => {
          onClickIcon(thirdIconText, logs);
        }}
      >
        {IconsList.IconLinkedIn}
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
