import React, { forwardRef } from "react";
import { InputContainer } from "./Input.style";

export interface InputProps {
  type: string;
  testId?: string;
}

export type InputRef = HTMLInputElement;
const Input = forwardRef<InputRef, InputProps>(({ type, testId }, ref) => (
  <InputContainer data-testid={testId} type={type} ref={ref} />
));

export default Input;
