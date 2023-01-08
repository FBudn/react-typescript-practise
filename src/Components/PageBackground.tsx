import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background: red;
  width: 500px;
`;

export interface PageBackgroundProps {
  text: string;
}

const PageBackground: React.FC<PageBackgroundProps> = ({ text }) => {
  return <Background>{text}</Background>;
};

export default PageBackground;
