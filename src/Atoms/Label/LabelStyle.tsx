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
  border: none;
  align: ${(props) => props.align};
  color: ${(props) => props.color};
  justify: ${(props) => props.justify};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
`;
