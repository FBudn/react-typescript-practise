import React from "react";
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
  return (
    <Tile>
      <TileContainer>
        <Header text="LOGIN" />
        <Form email="Email" password="Password" />
        <CheckboxPass text="Remember me?" />
        <Button text="LOGIN" />
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
