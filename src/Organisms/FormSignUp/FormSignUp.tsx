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
import InputAndLabel from "../../Molecules/InputAndLabel/InputAndLabel";
import { InputsContainer } from "./FormsStyle";

export interface FormSignUpProps {
  onButtonClick: (
    email: undefined | string,
    password: undefined | string,
    checkbox: string,
  ) => void;
}

export type RefHandlerSignUp = {
  EmailInputRef: RefObject<HTMLInputElement>;
  PasswordInputRef: RefObject<HTMLInputElement>;
};

const FormSignUp = forwardRef<RefHandlerSignUp, FormSignUpProps>(
  (props: FormSignUpProps, ref) => {
    const EmailInputRef = useRef<HTMLInputElement>(null);

    const PasswordInputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      EmailInputRef: EmailInputRef,
      PasswordInputRef: PasswordInputRef,
    }));

    return (
      <>
        <Header>SIGN UP</Header>
        <InputsContainer>
          <InputAndLabel type="email" ref={EmailInputRef}>
            Email
          </InputAndLabel>

          <InputAndLabel type="password" ref={PasswordInputRef}>
            Password
          </InputAndLabel>

          <Button
            onClick={() => {
              props.onButtonClick(
                EmailInputRef.current?.value,
                PasswordInputRef.current?.value,
                `  No-checkbox-here`,
              );
            }}
          >
            SIGN UP
          </Button>
        </InputsContainer>
      </>
    );
  },
);

export default FormSignUp;
