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
}

const Form: React.FC<LabelProps> = ({ email, password }) => {
  return (
    <InputsContainer>
      <OneInputContainer>
        <InputLabel>{email}</InputLabel>
        <Input type="email"></Input>
      </OneInputContainer>
      <OneInputContainer>
        <InputLabel>{password}</InputLabel>
        <Input type="password"></Input>
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
