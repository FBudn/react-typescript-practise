import React, { forwardRef } from "react";
import Button from "../../Atoms/Button/Button";
import Header from "../../Atoms/Header/Header";
import Label from "../../Atoms/Label/Label";
import CheckboxPass from "../../Molecules/CheckboxPass/CheckboxPass";
import InputAndLabel from "../../Molecules/InputAndLabel/InputAndLabel";
import { InputsContainer } from "../FormSignUp/FormsStyle";

export interface FormLoginProps {
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: (email: any, password: any, checkbox: any) => void;
  ref: any;
}

const FormLogin = forwardRef(function FormLogin(props: any, ref) {
  const { onButtonClick, handleEmail, handlePassword } = props;
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
        <CheckboxPass ref={ref}>Remember me?</CheckboxPass>
        <Button onClick={onButtonClick}> LOGIN </Button>
        <Label
          color="rgb(82 82 91)"
          align="center"
          justify="end"
          fontSize="0.9rem"
          fontWeight="450"
          width="100%"
          margin="-10px 0 0 0"
        >
          Forgot Password?
        </Label>
      </InputsContainer>
    </>
  );
});

export default FormLogin;

/*
 onChangeCheckbox={onChangeCheckbox}
tu do zmiany - jeden komponent jeden folder czyli tu FormLogin w swoim itd. Nawet jeśli pliki stylu takie same to 1 tu 1 tu


handleFocus={handleFocus}
          ref={ref}

import React from "react";
import Button from "../../Atoms/Button/Button";
import ForgotPass from "../../Atoms/ForgotPass/ForgotPass";
import Header from "../../Atoms/Header/Header";
import CheckboxPass from "../../Molecules/CheckboxPass/CheckboxPass";
import InputAndLabel from "../../Molecules/InputAndLabel/InputAndLabel";
import { InputsContainer } from "../FormSignUp/FormsStyle";

export interface FormLoginProps {
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: (email: any, password: any, checkbox: any) => void;
  ref: any;
}

const FormLogin: React.FC<FormLoginProps> = ({
  handleEmail,
  handlePassword,
  // onChangeCheckbox,
  onButtonClick,
  ref,
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
        <CheckboxPass ref={ref}>Remember me?</CheckboxPass>
        <Button onClick={onButtonClick}> LOGIN </Button>
        <ForgotPass> Forgot Password? </ForgotPass>
      </InputsContainer>
    </>
  );
};

export default FormLogin;

*/
