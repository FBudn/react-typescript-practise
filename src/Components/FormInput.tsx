import React, { useEffect } from "react";
import { OneInputContainer, InputLabel, Input } from "./Styles";

export interface FormProps {
  children: React.ReactNode;
  type: string;
  emailFocus?: any;
  setInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormProps> = ({
  children,
  type,
  setInputValue,
  emailFocus,
}) => {
  useEffect(() => {
    emailFocus.current?.focus();
  }, []);

  return (
    <OneInputContainer>
      <InputLabel>{children}</InputLabel>
      <Input
        type={type}
        onChange={setInputValue}
        required
        ref={emailFocus}
        // autoFocus
      />
    </OneInputContainer>
  );
};

export default FormInput;
