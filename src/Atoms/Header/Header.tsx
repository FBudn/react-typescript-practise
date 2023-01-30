import React from "react";
import { HeaderContainer } from "./HeaderStyle";

export interface HeaderProps {
  children: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  return <HeaderContainer>{props.children}</HeaderContainer>;
};

export default Header;
