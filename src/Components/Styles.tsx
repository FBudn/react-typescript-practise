import styled from "styled-components";

export const Background = styled.div`
  background: rgb(96 165 250);
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const MaxWidth = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 1700px;
  height: 100vh;
`;

export const Tile = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 10px;
  width: 80%;
`;

export const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 16px 16px 16px;
  width: 75%;
  gap: 6px;
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
  background: rgb(229 231 235); ;
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

//flex border-2 text-center items-center p-0.5 rounded text-sm font-medium  text-zinc-400 "
