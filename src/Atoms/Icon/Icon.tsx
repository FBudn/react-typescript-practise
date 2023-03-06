/* eslint-disable default-case */
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SoloIconContainer } from "./IconStyle";

export interface IconProps {
  onClickIcon: React.MouseEventHandler<HTMLDivElement>;
  color: string;
  icon: "facebook" | "google" | "linkedin";
}

const Icon: React.FC<IconProps> = ({ onClickIcon, color, icon }) => {
  switch (icon) {
    case "facebook":
      return (
        <SoloIconContainer
          data-testid="Icon-1-case"
          color={color}
          onClick={onClickIcon}
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </SoloIconContainer>
      );
    case "google":
      return (
        <SoloIconContainer
          data-testid="Icon-2-case"
          color={color}
          onClick={onClickIcon}
        >
          <FontAwesomeIcon icon={faGoogle} />
        </SoloIconContainer>
      );
    case "linkedin":
      return (
        <SoloIconContainer
          data-testid="Icon-3-case"
          color={color}
          onClick={onClickIcon}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </SoloIconContainer>
      );

    default:
      return (
        <SoloIconContainer color={color} onClick={onClickIcon}>
          <FontAwesomeIcon icon={faFacebookF} />
        </SoloIconContainer>
      );
  }
};

export default Icon;

/*
Nazwa funkcji znowu
*/
