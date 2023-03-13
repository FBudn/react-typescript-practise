import React, { forwardRef } from "react";
import { CheckboxInputContainer } from "./CheckboxInput.style";

export interface CheckboxInputProps {
  id?: string;
  testId?: string;
}

export type CheckboxRef = HTMLInputElement;
const CheckboxInput = forwardRef<CheckboxRef, CheckboxInputProps>(
  ({ id, testId }, ref) => (
    <CheckboxInputContainer data-testid={testId} id={id} ref={ref} />
  ),
);

export default CheckboxInput;
