import React from "react";
import { Tile, TileContainer } from "../../Components/Styles";
import Header from "../../Components/Header";
import Form from "../../Components/Form";
import Button from "../../Components/Button";
import Line from "../../Components/Line";
//import Line from "../../Components/Line";

const SignUp: React.FC = () => {
  return (
    <Tile>
      <TileContainer>
        <Header text="SIGN UP" />
        <Form email="Email" password="Password" />
        <Button text="SIGN UP" />
        <Line text="OR" />
      </TileContainer>
    </Tile>
  );
};

export default SignUp;
