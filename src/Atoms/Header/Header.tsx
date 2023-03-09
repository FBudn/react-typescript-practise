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

/*
Używam headera 2 razy, propsy zmieniają LOGIN/SIGN UP. 
Ewentualnie zrobiłbym jeden Text-Label i użył też jako header inaczej wystylizowany? = 1 komponent mniej
Nazewnictwo chyba ok
*/
