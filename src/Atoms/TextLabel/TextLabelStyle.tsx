import styled from "styled-components";

export const TextLabelContainer = styled.div.attrs(
  (props: {
    color: string;
    align: string;
    justify: string;
    fontWeight: string;
    fontSize: string;
    width: string;
    margin: string;
    cursor: string;
  }) => props,
)`
  display: flex;
  border: none;
  width: ${(props) => props.width};
  align-items: ${(props) => props.align};
  color: ${(props) => props.color};
  justify-content: ${(props) => props.justify};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor};
`;
