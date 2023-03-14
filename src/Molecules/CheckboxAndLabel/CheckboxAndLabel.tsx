import React, { forwardRef } from "react";
import { CheckboxAndLabelContainer } from "./CheckboxAndLabel.style";
import CheckboxInput from "../../Atoms/CheckboxInput/CheckboxInput";
import Label from "../../Atoms/TextLabel/TextLabel";

export interface CheckboxAndLabelProps {
  children: React.ReactNode;
  testId?: string;
}

export type CheckboxRef = HTMLInputElement;
const CheckboxAndLabel = forwardRef<CheckboxRef, CheckboxAndLabelProps>(
  ({ children, testId }, ref) => (
    <CheckboxAndLabelContainer data-testid={testId}>
      <CheckboxInput ref={ref} testId="test-checkbox-id" />
      <Label
        color="rgb(82 82 91)"
        align="center"
        justify="start"
        fontSize="1rem"
        fontWeight="500"
      >
        {children}
      </Label>
    </CheckboxAndLabelContainer>
  ),
);

export default CheckboxAndLabel;
