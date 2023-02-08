/* eslint-disable react/button-has-type */
import React from "react";

export interface LinkButtonProps {
  children: React.ReactNode;
  onClickLink: any;
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, onClickLink }) => {
  return <button onClick={onClickLink}>{children}</button>;
};

export default LinkButton;
