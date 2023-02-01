import React from "react";
import { HeaderContainer } from "./HeaderStyle";

export interface HeaderProps {
  children: string;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

export default Header;
