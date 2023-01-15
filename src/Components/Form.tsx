import React, { useRef, useEffect } from "react";
import {
  InputsContainer,
  OneInputContainer,
  InputLabel,
  Input,
} from "./Styles";

export interface FormProps {
  email: string;
  password: string;
  setEmailValues: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPasswordValues: (e: React.ChangeEvent<HTMLInputElement>) => void;
  //handleChange: (e: { target: { name: string; value: string } }) => void;
}

const Form: React.FC<FormProps> = ({
  email,
  password,
  setEmailValues,
  setPasswordValues,
}) => {
  const emailFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailFocus.current?.focus();
  }, []);

  return (
    <InputsContainer>
      <OneInputContainer>
        <InputLabel id="emailInput">{email}</InputLabel>
        <Input
          type="email"
          name="email"
          onChange={setEmailValues}
          required
          ref={emailFocus}
          // autoFocus
        ></Input>
      </OneInputContainer>
      <OneInputContainer>
        <InputLabel>{password}</InputLabel>
        <Input
          type="password"
          name="password"
          onChange={setPasswordValues}
          required
        ></Input>
      </OneInputContainer>
    </InputsContainer>
  );
};

export default Form;

//text-sm font-medium
/*
export interface HeaderProps {
  text: string;
}
*/
