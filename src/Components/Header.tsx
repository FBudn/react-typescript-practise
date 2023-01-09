import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  font-weight: bold;
  color: rgb(82 82 91);
`;

export interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return <HeaderContainer>{text}</HeaderContainer>;
};

export default Header;
