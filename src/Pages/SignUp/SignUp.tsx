import React, { useState } from "react";
import { InputsContainer, Tile, TileContainer } from "../../Components/Styles";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import Line from "../../Components/Line";
import Icons from "../../Components/Icons";
import SignOrLogLink from "../../Components/SignOrLogLink";
import EmailInput from "../../Components/Email-Input";
import PasswordInput from "../../Components/PasswordInput";

const SignUp: React.FC = () => {
  const [emailValues, setEmailValues] = useState("");

  const [passwordValues, setPasswordValues] = useState("");

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onButtonClick = () => {
    // eslint-disable-next-line no-console
    console.log(emailValues, passwordValues);
  };

  return (
    <Tile>
      <TileContainer>
        <Header>SIGN UP</Header>
        <InputsContainer>
          <EmailInput
            email="Email"
            setEmailValues={(e: any) => {
              setEmailValues(e.target.value);
            }}
          />
          <PasswordInput
            password="Password"
            setPasswordValues={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPasswordValues(e.target.value);
            }}
          />
        </InputsContainer>
        <Button
          text="SIGN UP"
          onClick={onButtonClick}
          // checkboxValue={checkboxValue}
        />
        <Line text="OR" />
        <Icons />
        <SignOrLogLink
          questionText="Already a user?"
          linkText="LOGIN"
          link="/Login"
        />
      </TileContainer>
    </Tile>
  );
};

export default SignUp;
