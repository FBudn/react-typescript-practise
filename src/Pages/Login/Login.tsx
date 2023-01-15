import React, { useState } from "react";
import { Tile, TileContainer } from "../../Components/Styles";
import Button from "../../Components/Button";
import Form from "../../Components/Form";
import Header from "../../Components/Header";
import Icons from "../../Components/Icons";
import Line from "../../Components/Line";
import SignOrLogLink from "../../Components/SignOrLogLink";
import CheckboxPass from "../../Components/CheckboxPass";
import ForgotPass from "../../Components/ForgotPass";

const Login: React.FC = () => {
  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxValue(event.target.checked);
  };

  const [emailValues, setEmailValues] = useState("");

  const [passwordValues, setPasswordValues] = useState("");

  const onButtonClick = () => {
    console.log(emailValues, passwordValues, checkboxValue);
  };

  /* const clearInput = (e: { target: { name: any; value: any } }) => {
    
  }; */

  return (
    <Tile>
      <TileContainer>
        <Header text="LOGIN" />
        <Form
          setEmailValues={(e: any) => setEmailValues(e.target.value)}
          setPasswordValues={(e: any) => setPasswordValues(e.target.value)}
          email="Email"
          password="Password"
        />
        <CheckboxPass text="Remember me?" handleCheckbox={handleCheckbox} />
        <Button
          text="LOGIN"
          onClick={onButtonClick}
          //checkboxValue={checkboxValue}
        />
        <ForgotPass text="Forgot Password?" />
        <Line text="OR" />
        <Icons />
        <SignOrLogLink
          questionText="Need an account?"
          linkText="SIGN UP"
          link="/SignUp"
        />
      </TileContainer>
    </Tile>
  );
};

export default Login;
