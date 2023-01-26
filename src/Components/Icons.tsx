import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { IconsContainerMain, SoloIconContainer } from "./Styles";

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
      <SoloIconContainer
        style={{ color: "red", borderColor: "red" }} // ZOSTAWIŁEM STYLE BO MAM JEDEN ICON-CONT - KOLOR ZMIENIAĆ EW. PRZEZ PROPSY?
        onClick={() => {
          PickLog(0);
        }}
      >
        {google}
      </SoloIconContainer>
      <SoloIconContainer
        style={{ color: "blue", borderColor: "blue" }}
        onClick={() => {
          PickLog(1);
        }}
      >
        {facebook}
      </SoloIconContainer>
      <SoloIconContainer
        style={{ color: "blue", borderColor: "blue" }}
        onClick={() => {
          PickLog(2);
        }}
      >
        {linkedin}
      </SoloIconContainer>
    </IconsContainerMain>
  );
};

export default Icons;
