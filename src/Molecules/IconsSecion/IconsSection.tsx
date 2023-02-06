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

export interface IconsProps {
  onClickIcon: any;
}

const Icons: React.FC<IconsProps> = ({ onClickIcon }) => {
  return (
    <IconsContainerMain>
      <Icon color="red" onClickIcon={onClickIcon}>
        {google}
      </Icon>

      <Icon color="blue" onClickIcon={onClickIcon}>
        {facebook}
      </Icon>

      <Icon color="blue" onClickIcon={onClickIcon}>
        {linkedin}
      </Icon>
    </IconsContainerMain>
  );
};

export default Icons;

/*
Przerobienie tego bo wszelka logika na samej górze w page 
i ogarnąć już funkcje
znowu nazwy folderów 
*/
