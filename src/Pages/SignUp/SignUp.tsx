import React, { useRef, useState } from "react";
import { InputsContainer, Tile, TileContainer } from "../../Components/Styles";
import Header from "../../Components/Header";
import Button from "../../Atoms/Button/Button";
import Line from "../../Molecules/Line/Line";
import Icons from "../../Components/Icons";
import SignOrLogLink from "../../Molecules/SignOrLogLink/SignOrLogLink";
import FormInput from "../../Components/FormInput";

const SignUp: React.FC = () => {
  const [InputValue, setInputValue] = useState("");

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onButtonClick = () => {
    // eslint-disable-next-line no-console
    console.log(InputValue);
  };

  const emailFocus = useRef<HTMLInputElement>(null);

  return (
    <Tile>
      <TileContainer>
        <Header>SIGN UP</Header>
        <InputsContainer>
          <FormInput
            type="Email"
            setInputValue={handleInput}
            emailFocus={emailFocus}
          >
            Email
          </FormInput>
          <FormInput
            type="password"
            setInputValue={handleInput}
            emailFocus={emailFocus}
          >
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
