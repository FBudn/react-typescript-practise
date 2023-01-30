/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Button from "../../Atoms/Button/Button";
import ForgotPass from "../../Atoms/ForgotPass/ForgotPass";
import Header from "../../Atoms/Header/Header";
import CheckboxPass from "../../Molecules/CheckboxPass/CheckboxPass";
import InputAndLabel from "../../Molecules/InputAndLabel/InputAndLabel";
import { InputsContainer } from "./FormsStyle";

export interface FormLoginProps {
  emailFocus?: any;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
}

const FormLogin: React.FC<FormLoginProps> = ({
  handleEmail,
  handlePassword,
  handleCheckbox,
  onButtonClick,
}) => {
  return (
    <>
      <Header>LOGIN</Header>
      <InputsContainer>
        <InputAndLabel type="email" setInputValue={handleEmail}>
          Email
        </InputAndLabel>
        <InputAndLabel type="password" setInputValue={handlePassword}>
          Password
        </InputAndLabel>
        <CheckboxPass handleCheckbox={handleCheckbox}>
          Remember me?
        </CheckboxPass>
        <Button onClick={onButtonClick}> LOGIN </Button>
        <ForgotPass text="Forgot Password?" />
      </InputsContainer>
    </>
  );
};

export default FormLogin;
