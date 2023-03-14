import React, { forwardRef } from "react";
import Input from "../../Atoms/Input/Input";
import TextLabel from "../../Atoms/TextLabel/TextLabel";
import { InputAndLabelContainer } from "./InputLabel.styles";

export interface InputAndLabelProps {
  infoText: React.ReactNode;
  type: string;
  testId?: string;
}

export type InputRef = HTMLInputElement;
const InputAndLabel = forwardRef<InputRef, InputAndLabelProps>(
  ({ infoText, type, testId }, ref) => (
    <InputAndLabelContainer data-testid={testId}>
      <TextLabel
        color="rgb(82 82 91)"
        align="center"
        justify="start"
        fontSize="1.1rem"
        fontWeight="500"
      >
        {infoText}
      </TextLabel>
      <Input type={type} ref={ref} testId="test-input-id" />
    </InputAndLabelContainer>
  ),
);

export default InputAndLabel;
