import React, { useState } from "react";
import { Tile, TileContainer } from "../../Components/Styles";
import Header from "../../Components/Header";
import Form from "../../Components/Form";
import Button from "../../Components/Button";
import Line from "../../Components/Line";
import Icons from "../../Components/Icons";
import SignOrLogLink from "../../Components/SignOrLogLink";

const SignUp: React.FC = () => {
  const [inputsValues, setInputsValues] = useState({
    email: "",
    password: "",
  }); // na osobne: email i password

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    setInputsValues((prev: any) => {
      return { ...prev, [name]: value };
    });
  }; //lepiej rozbić na 2 funkcje

  const onButtonClick = () => {
    console.log(inputsValues);
  }; //do Loginu ta sama poprawka

  //const checkboxValue = `No checkbox`;
  return (
    <Tile>
      <TileContainer>
        <Header text="SIGN UP" />
        <Form handleChange={handleChange} email="Email" password="Password" />
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
