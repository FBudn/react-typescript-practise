import React, { useState } from "react";
import { InputsContainer, Tile, TileContainer } from "../../Components/Styles";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import Icons from "../../Components/Icons";
import Line from "../../Components/Line";
import SignOrLogLink from "../../Components/SignOrLogLink";
import CheckboxPass from "../../Components/CheckboxPass";
import ForgotPass from "../../Components/ForgotPass";
import EmailInput from "../../Components/Email-Input";
import PasswordInput from "../../Components/PasswordInput";

const Login: React.FC = () => {
  const [checkboxValue, setCheckboxValue] = useState(false);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxValue(event.target.checked);
  };

  const [emailValues, setEmailValues] = useState("");

  const [passwordValues, setPasswordValues] = useState("");

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onButtonClick = () => {
    // eslint-disable-next-line no-console
    console.log(emailValues, passwordValues, checkboxValue);
  };

  /* const clearInput = (e: { target: { name: any; value: any } }) => {
    
  }; */

  return (
    <Tile>
      <TileContainer>
        <Header>LOGIN</Header>
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
        <CheckboxPass handleCheckbox={handleCheckbox}>
          Remember me?
        </CheckboxPass>
        <Button
          text="LOGIN"
          onClick={onButtonClick}
          // checkboxValue={checkboxValue}
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

/*


*/
