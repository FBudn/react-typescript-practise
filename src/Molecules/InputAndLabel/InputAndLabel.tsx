import React, { forwardRef } from "react";
import Input from "../../Atoms/Input/Input";
import Label from "../../Atoms/TextLabel/TextLabel";
import { InputAndLabelContainer } from "./InputLabel.styles";

export interface InputAndLabelProps {
  children: React.ReactNode;
  type: string;
  testId?: string;
  testIdInput?: string;
}

export type InputRef = HTMLInputElement;
const InputAndLabel = forwardRef<InputRef, InputAndLabelProps>(
  (props: InputAndLabelProps, ref) => (
    <InputAndLabelContainer data-testid={props.testId}>
      <Label
        color="rgb(82 82 91)"
        align="center"
        justify="start"
        fontSize="1.1rem"
        fontWeight="500"
      >
        {props.children}
      </Label>
      <Input type={props.type} ref={ref} testId="test-input-id" />
    </InputAndLabelContainer>
  ),
);

export default InputAndLabel;
