/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { IconsContainer } from "../Molecules/IconsSecion/IconsSection.style";
import { SoloIconContainer } from "./Icon/Icon.style";

export interface TestIconProps {
  onClickIcon: (i: string) => void;
}

const TestIcon: React.FC<TestIconProps> = ({ onClickIcon }) => {
  const [icons, setIcon] = useState([
    {
      title: `Facebook`,
      color: `blue`,
      icon: faFacebookF,
      id: `Icon-Facebook-case`,
      log: `Facebook clicked`,
    },
    {
      title: `Google`,
      color: `red`,
      icon: faGoogle,
      id: `Icon-Google-case`,
      log: `Google clicked`,
    },
    {
      title: `LinkedIn`,
      color: `blue`,
      icon: faLinkedinIn,
      id: `Icon-LinkedIn-case`,
      log: `LinkedIn clicked`,
    },
  ]);

  /* const setIcon = () => {
    const log = String(icons.map((icon) => `${icon.log}`));
    onClickIcon(log);
  }; */

  return (
    <IconsContainer>
      {icons.map((icon) => (
        <SoloIconContainer
          key={icon.id}
          color={icon.color}
          onClick={() => {
            onClickIcon(`${icon.log}`);
          }}
        >
          <FontAwesomeIcon icon={icon.icon} />
        </SoloIconContainer>
      ))}
    </IconsContainer>
  );
};

export default TestIcon;
