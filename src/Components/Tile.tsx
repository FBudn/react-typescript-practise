import React from "react";
import styled from "styled-components";

const TileContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center
  padding: 6px;
  border: rounded;
`;

const Tile: React.FC = () => {
  return <TileContainer>1</TileContainer>;
};

export default Tile;

/*
export interface TileProps {
  text: string;
}

const Tile: React.FC<TileProps> = ({ text }) => {
  return <TileContainer>1</TileContainer>;
};

a w exportowaniu 

<Tile text="1233" />
*/
