/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";
import Button from "../../Atoms/Button/Button";
import Header from "../../Atoms/Header/Header";
import Label from "../../Atoms/TextLabel/TextLabel";
import CheckboxPass from "../../Molecules/CheckboxAndLabel/CheckboxAndLabel";
import InputAndLabel from "../../Molecules/InputAndLabel/InputAndLabel";
import { InputsContainer } from "../FormSignUp/FormsStyle";

export interface FormLoginProps {
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: (email: any, password: any, checkbox: any) => void;
}

export type CheckboxRef = HTMLInputElement;
const FormLogin = forwardRef<CheckboxRef, FormLoginProps>((props, ref) => (
  <>
    <Header>LOGIN</Header>
    <InputsContainer>
      <InputAndLabel type="email" setInputValue={props.handleEmail}>
        Email
      </InputAndLabel>
      <InputAndLabel type="password" setInputValue={props.handlePassword}>
        Password
      </InputAndLabel>
      <CheckboxPass ref={ref}>Remember me?</CheckboxPass>
      <Button onClick={props.onButtonClick}> LOGIN </Button>
      <Label
        color="rgb(82 82 91)"
        align="center"
        justify="end"
        fontSize="0.9rem"
        fontWeight="450"
        width="100%"
        margin="-10px 0 0 0"
        cursor="pointer"
      >
        Forgot Password?
      </Label>
    </InputsContainer>
  </>
));

export default FormLogin;

/*
 onChangeCheckbox={onChangeCheckbox}
tu do zmiany - jeden komponent jeden folder czyli tu FormLogin w swoim itd. Nawet jeśli pliki stylu takie same to 1 tu 1 tu


handleFocus={handleFocus}
          ref={ref}

*/
