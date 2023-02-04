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

const Icons: React.FC = () => {
  const IconsLogs = [`Google Clicked`, `Facebook Clicked`, `LinkedIn Clicked`];

  const onClickIcon = (i: number) => {
    console.log(IconsLogs[i]);
  };
  return (
    <IconsContainerMain>
      <Icon
        color="red"
        onClickIcon={() => {
          onClickIcon(0);
        }}
      >
        {google}
      </Icon>

      <Icon
        color="blue"
        onClickIcon={() => {
          onClickIcon(1);
        }}
      >
        {facebook}
      </Icon>

      <Icon
        color="blue"
        onClickIcon={() => {
          onClickIcon(2);
        }}
      >
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
