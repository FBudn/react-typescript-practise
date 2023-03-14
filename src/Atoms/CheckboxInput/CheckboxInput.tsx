import React, { forwardRef } from "react";
import { CheckboxInputContainer } from "./CheckboxInput.style";

export interface CheckboxInputProps {
  testId: string;
}

export type CheckboxRef = HTMLInputElement;
const CheckboxInput = forwardRef<CheckboxRef, CheckboxInputProps>(
  ({ testId }, ref) => (
    <CheckboxInputContainer data-testid={testId} ref={ref} />
  ),
);

export default CheckboxInput;
