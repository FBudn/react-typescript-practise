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
  const [inputsValues, setInputsValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    setInputsValues((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  console.log(
    Object.entries(inputsValues)
      .flat()
      .filter((e) => e !== "")
  );
  return (
    <Tile>
      <TileContainer>
        <Header text="LOGIN" />
        <Form handleChange={handleChange} email="Email" password="Password" />
        <CheckboxPass text="Remember me?" />
        <Button text="LOGIN" onClick={inputsValues} />
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
