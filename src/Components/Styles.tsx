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

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: 500;
  color: rgb(82 82 91);
  margin-top: 4px;
  gap: 10px;
`;

export const OneInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  width: 100%;
`;

export const InputLabel = styled.div`
  display: flex;
`;

export const Input = styled.input`
  border-radius: 5px;
  height: 40px;
  border: 2px solid rgb(214 211 209);
`;

export const ButtonContainer = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  cursor: pointer;
  background: rgb(236 72 153);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-color: #94a3b8;
  margin: 8px;
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

export const CheckboxContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  text: center;
  gap: 3px;
  height: 10px;
  color: rgb(82 82 91);
  cursor: pointer;
  margin: 5px 0px 5px 0px;
`;
// ad. margin góra,prawa,dół,lewa

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
