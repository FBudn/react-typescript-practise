import React from "react";
import { OneInputContainer, InputLabel, Input } from "./Styles";

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
      <Input type="password" onChange={setPasswordValue} required />
    </OneInputContainer>
  );
};

export default PasswordInput;
