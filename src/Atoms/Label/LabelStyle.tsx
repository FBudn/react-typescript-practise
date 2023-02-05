import styled from "styled-components";

export const LabelContainer = styled.div.attrs(
  (props: {
    color: string;
    align: string;
    justify: string;
    fontWeight: string;
    fontSize: string;
  }) => props,
)`
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
  margin: 6px 0px 6px 0px;

  align: ${(props) => props.align};
  color: ${(props) => props.color};
  justi
`;
