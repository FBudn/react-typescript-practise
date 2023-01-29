import React, { useEffect, useRef, useState } from "react";
import { InputsContainer, Tile, TileContainer } from "../../Components/Styles";
import Header from "../../Components/Header";
import Button from "../../Atoms/Button/Button";
import Line from "../../Molecules/Line/Line";
import Icons from "../../Components/Icons";
import SignOrLogLink from "../../Molecules/SignOrLogLink/SignOrLogLink";
import FormInput from "../../Molecules/InputAndLabel/InputAndLabel";

const SignUp: React.FC = () => {
  const [emailValue, setEmailValue] = useState("");
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const [passwordValue, setPasswordValue] = useState("");

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onButtonClick = () => {
    // eslint-disable-next-line no-console
    console.log(emailValue, passwordValue);
  };

  const emailFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailFocus.current?.focus();
  }, []);

  return (
    <Tile>
      <TileContainer>
        <Header>SIGN UP</Header>
        <InputsContainer>
          <FormInput
            type="Email"
            setInputValue={handleEmail}
            emailFocus={emailFocus}
          >
            Email
          </FormInput>
          <FormInput type="password" setInputValue={handlePassword}>
            Password
          </FormInput>
        </InputsContainer>
        <Button onClick={onButtonClick}> SIGN UP </Button>
        <Line>OR</Line>
        <Icons />
        <SignOrLogLink linkText="LOGIN" link="/Login">
          Already a user?
        </SignOrLogLink>
      </TileContainer>
    </Tile>
  );
};

export default SignUp;

// <EmailInput email="Email" setInputValue={handleEmail} />
