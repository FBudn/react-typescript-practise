import React from "react";
import Input from "../../Atoms/Input/Input";
import { OneInputContainer, InputLabel } from "./InputLabelStyles";

export interface InputAndLabelProps {
  children: React.ReactNode;
  type: string;
  emailFocus?: any;
  setInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputAndLabel: React.FC<InputAndLabelProps> = ({
  children,
  type,
  setInputValue,
  emailFocus,
}) => {
  return (
    <OneInputContainer>
      <InputLabel>{children}</InputLabel>
      <Input
        type={type}
        setInputValue={setInputValue}
        emailFocus={emailFocus}
        // autoFocus
      />
    </OneInputContainer>
  );
};

export default InputAndLabel;

/*
 handleFocus={handleFocus}
        ref={ref}
*/
