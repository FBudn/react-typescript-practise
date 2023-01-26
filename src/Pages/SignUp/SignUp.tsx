import React, { useState } from "react";
import { InputsContainer, Tile, TileContainer } from "../../Components/Styles";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import Line from "../../Components/Line";
import Icons from "../../Components/Icons";
import SignOrLogLink from "../../Components/SignOrLogLink";
import EmailInput from "../../Components/EmailInput";
import PasswordInput from "../../Components/PasswordInput";

const SignUp: React.FC = () => {
  const emailValue = useState("");

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const setEmailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    return e.target.value;
  };

  const [passwordValue, setPasswordValue] = useState("");

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onButtonClick = () => {
    // eslint-disable-next-line no-console
    console.log(emailValue, passwordValue);
  };

  return (
    <Tile>
      <TileContainer>
        <Header>SIGN UP</Header>
        <InputsContainer>
          <EmailInput email="Email" setEmailValue={setEmailValue} />
          <PasswordInput
            password="Password"
            setPasswordValue={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPasswordValue(e.target.value);
            }}
          />
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
