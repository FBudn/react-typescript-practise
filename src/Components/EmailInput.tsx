import React, { useRef, useEffect } from "react";
import { OneInputContainer, InputLabel, Input } from "./Styles";

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
      <Input
        type="email"
        name="email"
        onChange={setEmailValue}
        required
        ref={emailFocus}
        // autoFocus
      />
    </OneInputContainer>
  );
};

export default EmailInput;
