import React from "react";
import {
  InputsContainer,
  OneInputContainer,
  InputLabel,
  Input,
} from "./Styles";

export interface LabelProps {
  email: string;
  password: string;
  handleChange: (e: { target: { name: string; value: string } }) => void;
}

const Form: React.FC<LabelProps> = ({ email, password, handleChange }) => {
  return (
    <InputsContainer>
      <OneInputContainer>
        <InputLabel id="emailInput">{email}</InputLabel>
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          required
        ></Input>
      </OneInputContainer>
      <OneInputContainer>
        <InputLabel>{password}</InputLabel>
        <Input
          type="password"
          name="password"
          onChange={handleChange}
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
