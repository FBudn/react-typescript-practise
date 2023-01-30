/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { IconsContainerMain } from "./IconsStyle";
import Icon from "../../Atoms/Icon/Icon";

const facebook = <FontAwesomeIcon icon={faFacebookF} />;
const google = <FontAwesomeIcon icon={faGoogle} />;
const linkedin = <FontAwesomeIcon icon={faLinkedinIn} />;

const Icons: React.FC = () => {
  const IconsLogs = [`Google Clicked`, `Facebook Clicked`, `LinkedIn Clicked`];
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const PickLog = (i: number) => {
    // eslint-disable-next-line no-console
    console.log(IconsLogs[i]);
  };
  return (
    <IconsContainerMain>
      <Icon PickLog={() => PickLog(0)}>{google}</Icon>
      <Icon PickLog={() => PickLog(1)}>{facebook}</Icon>
      <Icon PickLog={() => PickLog(2)}>{linkedin}</Icon>
    </IconsContainerMain>
  );
};

export default Icons;
