import styled from "styled-components";

export const SoloIconContainer = styled.div.attrs(
  (props: { color: string }) => props,
)`
  display: flex;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
  padding: 8px;
  font-size: 1rem;
  border-radius: 100%;
  border: 2px solid red;
  cursor: pointer;

  border-color: ${(props) => props.color};
  color: ${(props) => props.color};
`;
