/* eslint-disable react/button-has-type */
import React from "react";
import { LinkButtonStyled } from "./LinkButtonStyle";

export interface LinkButtonProps {
  children: React.ReactNode;
  onClickLink: any;
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, onClickLink }) => {
  return <LinkButtonStyled onClick={onClickLink}>{children}</LinkButtonStyled>;
};

export default LinkButton;
