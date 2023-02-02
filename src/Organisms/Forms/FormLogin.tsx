import React from "react";
import Button from "../../Atoms/Button/Button";
import ForgotPass from "../../Atoms/ForgotPass/ForgotPass";
import Header from "../../Atoms/Header/Header";
import CheckboxPass from "../../Molecules/CheckboxPass/CheckboxPass";
import InputAndLabel from "../../Molecules/InputAndLabel/InputAndLabel";
import { InputsContainer } from "./FormsStyle";

export interface FormLoginProps {
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
        <ForgotPass> Forgot Password? </ForgotPass>
      </InputsContainer>
    </>
  );
};

export default FormLogin;

/*
tu do zmiany - jeden komponent jeden folder czyli tu FormLogin w swoim itd. Nawet jeśli pliki stylu takie same to 1 tu 1 tu


handleFocus={handleFocus}
          ref={ref}
*/
