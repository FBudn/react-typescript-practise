import React from "react";
import Button from "../../Atoms/Button/Button";
import Header from "../../Atoms/Header/Header";
import InputAndLabel from "../../Molecules/InputAndLabel/InputAndLabel";
import { InputsContainer } from "./FormsStyle";

export interface FormSignUpProps {
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
}

const FormSignUp: React.FC<FormSignUpProps> = ({
  handleEmail,
  handlePassword,
  onButtonClick,
}) => {
  return (
    <>
      <Header>SIGN UP</Header>
      <InputsContainer>
        <InputAndLabel type="email" setInputValue={handleEmail}>
          Email
        </InputAndLabel>

        <InputAndLabel type="password" setInputValue={handlePassword}>
          Password
        </InputAndLabel>

        <Button onClick={onButtonClick}>SIGN UP</Button>
      </InputsContainer>
    </>
  );
};

export default FormSignUp;
