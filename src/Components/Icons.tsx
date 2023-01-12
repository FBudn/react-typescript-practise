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
  return (
    <IconsContainerMain>
      <SoloIconContainer
        style={{ color: "red", borderColor: "red" }}
        onClick={() => console.log(`Google Clicked`)}
      >
        {google}
      </SoloIconContainer>
      <SoloIconContainer
        style={{ color: "blue", borderColor: "blue" }}
        onClick={() => console.log(`Facebook Clicked`)}
      >
        {facebook}
      </SoloIconContainer>
      <SoloIconContainer
        style={{ color: "blue", borderColor: "blue" }}
        onClick={() => console.log(`LinkedIn Clicked`)}
      >
        {linkedin}
      </SoloIconContainer>
    </IconsContainerMain>
  );
};

export default Icons;
