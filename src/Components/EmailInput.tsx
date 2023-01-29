import React, { useRef, useEffect } from "react";
import Input from "../Atoms/Input/Input";
import {
  OneInputContainer,
  InputLabel,
} from "../Molecules/InputAndLabel/InputLabelStyles";

export interface EmailProps {
  email: string;
  setEmailValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput: React.FC<EmailProps> = ({ email, setEmailValue }) => {
  const emailFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailFocus.current?.focus();
  }, []);

  return (
    <OneInputContainer>
      <InputLabel id="emailInput">{email}</InputLabel>
      <Input type="email" setInputValue={setEmailValue} />
    </OneInputContainer>
  );
};

export default EmailInput;
