import React, { useState } from "react";
import { Tile, TileContainer } from "../../Components/Styles";
import Header from "../../Components/Header";
import Form from "../../Components/Form";
import Button from "../../Components/Button";
import Line from "../../Components/Line";
import Icons from "../../Components/Icons";
import SignOrLogLink from "../../Components/SignOrLogLink";

const SignUp: React.FC = () => {
  const [emailValues, setEmailValues] = useState("");

  const [passwordValues, setPasswordValues] = useState("");

  const onButtonClick = () => {
    console.log(emailValues, passwordValues);
  };

  return (
    <Tile>
      <TileContainer>
        <Header text="SIGN UP" />
        <Form
          setEmailValues={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmailValues(e.target.value)
          }
          setPasswordValues={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPasswordValues(e.target.value)
          }
          email="Email"
          password="Password"
        />
        <Button
          text="SIGN UP"
          onClick={onButtonClick}
          //checkboxValue={checkboxValue}
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
