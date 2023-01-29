import React from "react";
import { InputAtom } from "./InputStyle";

export interface InputProps {
  type: string;
  setInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  emailFocus?: any;
}

const Input: React.FC<InputProps> = ({ type, setInputValue, emailFocus }) => {
  return (
    <InputAtom type={type} onChange={setInputValue} ref={emailFocus} required />
  );
};

export default Input;
