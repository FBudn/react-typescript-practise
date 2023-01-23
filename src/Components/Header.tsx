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
  children: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  return <HeaderContainer>{props.children}</HeaderContainer>;
};

export default Header;
