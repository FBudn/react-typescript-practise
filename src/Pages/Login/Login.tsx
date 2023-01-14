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

  const [inputsValues, setInputsValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    setInputsValues((prev: { email: string; password: string }) => {
      return { ...prev, [name]: value };
    });
  };

  const onButtonClick = () => {
    console.log(inputsValues, checkboxValue);
  };

  /* const clearInput = (e: { target: { name: any; value: any } }) => {
    
  }; */

  return (
    <Tile>
      <TileContainer>
        <Header text="LOGIN" />
        <Form handleChange={handleChange} email="Email" password="Password" />
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
