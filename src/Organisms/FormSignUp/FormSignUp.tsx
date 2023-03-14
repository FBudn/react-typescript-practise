/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "../../Atoms/Button/Button";
import Header from "../../Atoms/Header/Header";
import InputAndLabel from "../../Molecules/InputAndLabel/InputAndLabel";
import { FormSignUpContainer, InputsContainer } from "./Forms.style";

export interface FormSignUpProps {
  onButtonClick: (
    email: undefined | string,
    password: undefined | string,
    checkbox: string,
  ) => void;
  testId?: string;
  testIdButton?: string;
}

export type RefHandlerSignUp = {
  focus: () => void;
};

const FormSignUp = forwardRef<RefHandlerSignUp, FormSignUpProps>(
  (props: FormSignUpProps, ref) => {
    const EmailInputRef = useRef<HTMLInputElement>(null);

    const PasswordInputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(
      ref,
      () => ({
        focus: () => {
          EmailInputRef?.current?.focus();
        },
      }),
      [],
    );

    const onSubmit = () => {
      props.onButtonClick(
        EmailInputRef.current!.value,
        PasswordInputRef.current!.value,
        `No checkbox here`,
      );
    };

    return (
      <FormSignUpContainer data-testid={props.testId}>
        <Header>SIGN UP</Header>
        <InputsContainer>
          <InputAndLabel type="email" ref={EmailInputRef}>
            Email
          </InputAndLabel>

          <InputAndLabel type="password" ref={PasswordInputRef}>
            Password
          </InputAndLabel>

          <Button onClick={onSubmit} testId="test-button-id">
            SIGN UP
          </Button>
        </InputsContainer>
      </FormSignUpContainer>
    );
  },
);

export default FormSignUp;
