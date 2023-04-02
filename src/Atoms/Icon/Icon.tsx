import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SoloIconContainer } from "./Icon.style";

export interface IconProps {
  onClickIcon: () => void;
  color: string;
  icon: "facebook" | "google" | "linkedin";
  testId?: string;
}

const Icon: React.FC<IconProps> = ({ onClickIcon, color, icon, testId }) => {
  switch (icon) {
    case "facebook":
      return (
        <SoloIconContainer
          data-testid={testId}
          color={color}
          onClick={onClickIcon}
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </SoloIconContainer>
      );
    case "google":
      return (
        <SoloIconContainer
          data-testid={testId}
          color={color}
          onClick={onClickIcon}
        >
          <FontAwesomeIcon icon={faGoogle} />
        </SoloIconContainer>
      );
    case "linkedin":
      return (
        <SoloIconContainer
          data-testid={testId}
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

// coment
