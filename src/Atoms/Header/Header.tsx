import React from "react";
import { HeaderContainer } from "./HeaderStyle";

export interface HeaderProps {
  children: string;
  testId?: string;
}

const Header: React.FC<HeaderProps> = ({ children, testId }) => {
  return <HeaderContainer data-testid={testId}>{children}</HeaderContainer>;
};

export default Header;
