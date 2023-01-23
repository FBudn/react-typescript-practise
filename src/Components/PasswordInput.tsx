import React from "react";
import { OneInputContainer, InputLabel, Input } from "./Styles";

export interface PasswordProps {
  password: string;
  setPasswordValues: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordProps> = ({
  password,
  setPasswordValues,
}) => {
  return (
    <OneInputContainer>
      <InputLabel>{password}</InputLabel>
      <Input
        type="password"
        name="password"
        onChange={setPasswordValues}
        required
      />
    </OneInputContainer>
  );
};

export default PasswordInput;
