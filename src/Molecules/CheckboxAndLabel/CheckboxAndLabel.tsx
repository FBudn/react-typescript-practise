import React, { forwardRef } from "react";
import { CheckboxAndLabelContainer } from "./CheckboxAndLabel.style";
import CheckboxInput from "../../Atoms/CheckboxInput/CheckboxInput";
import TextLabel from "../../Atoms/TextLabel/TextLabel";

export interface CheckboxAndLabelProps {
  infoText: React.ReactNode;
  testId?: string;
}

export type CheckboxRef = HTMLInputElement;
const CheckboxAndLabel = forwardRef<CheckboxRef, CheckboxAndLabelProps>(
  ({ infoText, testId }, ref) => (
    <CheckboxAndLabelContainer data-testid={testId}>
      <CheckboxInput ref={ref} testId="test-checkbox-id" />
      <TextLabel
        color="rgb(82 82 91)"
        align="center"
        justify="start"
        fontSize="1rem"
        fontWeight="500"
      >
        {infoText}
      </TextLabel>
    </CheckboxAndLabelContainer>
  ),
);

export default CheckboxAndLabel;
