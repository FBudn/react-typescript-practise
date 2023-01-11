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
  handleChange: any;
}

const Form: React.FC<LabelProps> = ({ email, password, handleChange }) => {
  return (
    <InputsContainer>
      <OneInputContainer>
        <InputLabel>{email}</InputLabel>
        <Input type="email" name="email" onChange={handleChange}></Input>
      </OneInputContainer>
      <OneInputContainer>
        <InputLabel>{password}</InputLabel>
        <Input type="password" name="password" onChange={handleChange}></Input>
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
