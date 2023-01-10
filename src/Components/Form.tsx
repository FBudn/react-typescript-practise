import React, { useState } from "react";
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
  const [inputsValues, setInputsValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    setInputsValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  console.log(inputsValues);

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