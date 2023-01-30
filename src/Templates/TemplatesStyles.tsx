import styled from "styled-components";

export const Background = styled.div`
  background: rgb(96 165 250);
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
// box sizing - border box właściwość sprawdzić
export const MaxWidth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  max-width: 1700px;
`;

export const Tile = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  padding-top: 35px;
  padding-bottom: 35px;
  border-radius: 10px;
  width: 80%;

  @media screen and (min-width: 768px) {
    max-width: 24rem;
    min-height: 27rem;
  }
`;

export const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 16px 16px 16px;
  width: 75%;
  gap: 6px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
