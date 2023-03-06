import React from "react";
import { HeaderContainer } from "./HeaderStyle";

export interface HeaderProps {
  children: string;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <HeaderContainer data-testid="Header-1">{children}</HeaderContainer>;
};

export default Header;
