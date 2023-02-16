/* eslint-disable react/prop-types */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import React, {
  forwardRef,
  RefObject,
  useImperativeHandle,
  useRef,
} from "react";
import Button from "../../Atoms/Button/Button";
import Header from "../../Atoms/Header/Header";
import Label from "../../Atoms/TextLabel/TextLabel";
import CheckboxPass from "../../Molecules/CheckboxAndLabel/CheckboxAndLabel";
import InputAndLabel from "../../Molecules/InputAndLabel/InputAndLabel";
import { InputsContainer } from "../FormSignUp/FormsStyle";

export interface FormLoginProps {
  onButtonClick: (
    email: undefined | string,
    password: undefined | string,
    checkbox: undefined | boolean,
  ) => void;
}

export type RefHandlerLogin = {
  CheckboxRef: RefObject<HTMLInputElement>;
  EmailInputRef: RefObject<HTMLInputElement>;
  PasswordInputRef: RefObject<HTMLInputElement>;
};

const FormLogin = forwardRef<RefHandlerLogin, FormLoginProps>(
  (props: FormLoginProps, ref) => {
    const CheckboxRef = useRef<HTMLInputElement>(null);

    const EmailInputRef = useRef<HTMLInputElement>(null);

    const PasswordInputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      CheckboxRef: CheckboxRef,
      EmailInputRef: EmailInputRef,
      PasswordInputRef: PasswordInputRef,
    }));

    return (
      <>
        <Header>LOGIN</Header>
        <InputsContainer>
          <InputAndLabel ref={EmailInputRef} type="email">
            Email
          </InputAndLabel>
          <InputAndLabel ref={PasswordInputRef} type="password">
            Password
          </InputAndLabel>
          <CheckboxPass ref={CheckboxRef}>Remember me?</CheckboxPass>
          <Button
            onClick={() => {
              props.onButtonClick(
                EmailInputRef.current?.value,
                PasswordInputRef.current?.value,
                CheckboxRef.current?.checked,
              );
            }}
          >
            LOGIN
          </Button>
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
    );
  },
);
export default FormLogin;

/*
(e: React.ChangeEvent<HTMLInputElement>) => void;
 onChangeCheckbox={onChangeCheckbox}
tu do zmiany - jeden komponent jeden folder czyli tu FormLogin w swoim itd. Nawet jeśli pliki stylu takie same to 1 tu 1 tu


handleFocus={handleFocus}
          ref={ref}


          /*function handleEmail() {
    console.log(EmailInputref.current?.value);
  } 

    function handlePassword() {
    console.log(EmailInputref.current?.value);
  }

  Mogę podać też referencje wyżej wtedy w rodzicy robię 
  const childRef* = useRef<RefHandler**>(null***) 
  i korzystam z nich np tak
  console.log(childRef?.current?.przykladowaReferencja?.current?.value) 

  * obojętnie jaka nazwa
  ** też obojętnie jaka nazwa ale ta co w export type dziecka
  *** null albo nic? tu nie jestem pewien


  TestRef: RefObject<HTMLInputElement> | string | undefined;
  TestRef: TestRef.current?.value,
*/
