/* eslint-disable no-restricted-exports */
import styled from "styled-components";

const CheckboxInputStyle = styled.input.attrs({ type: "checkbox" })`
  max-width: 35px;
  min-width: 20px;
  max-height: 35px;
  min-height: 20px;
  margin: 5px 0px 0px 0px;
  cursor: pointer;
`;

export { CheckboxInputStyle as default };
