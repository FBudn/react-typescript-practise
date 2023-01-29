import React from "react";
import Input from "../Atoms/Input/Input";
import {
  OneInputContainer,
  InputLabel,
} from "../Molecules/InputAndLabel/InputLabelStyles";

export interface PasswordProps {
  password: string;
  setPasswordValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordProps> = ({
  password,
  setPasswordValue,
}) => {
  return (
    <OneInputContainer>
      <InputLabel>{password}</InputLabel>
      <Input type="password" setInputValue={setPasswordValue} />
    </OneInputContainer>
  );
};

export default PasswordInput;
