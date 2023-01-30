import styled from "styled-components";

/*
 margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 */
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

export const LineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
`;

export const HrStyled = styled.hr`
  width: 117px;
  border: none;
  height: 2px;
  background: rgb(229 231 235);

  @media screen and (min-width: 768px) {
    width: 130px;
  }
`;

export const LineTextBox = styled.div`
display:flex;
border: 2px solid rgb(229 231 235);
text-center;
items:center;
padding: 2px;
border-radius:5px;
font-size: 0.875rem; 
line-height: 1.25rem; 
font-weight: 500;
color: rgb(156 163 175);;
`;

export const IconsContainerMain = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 4px;
`;

export const SoloIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text: center;
  padding: 8px;
  font-size: 1rem;
  border-radius: 100%;
  border: 2px solid black;
  cursor: pointer;
`;

export const SignOrLogLinkContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1px;
  margin: 2px;
`;

export const ForgotPassContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  text: center;
  align-items: center;
  height: 10px;
  color: rgb(82 82 91);
  cursor: pointer;
  margin-top: -8px;
  font-size: 0.9rem;
  margin-bottom: 8px;
`;

// flex w-full justify-end text-center text-sm font-medium  text-zinc-400 cursor-pointer
