import React, { useEffect, useRef, useState } from "react";
import { InputsContainer, Tile, TileContainer } from "../../Components/Styles";
import Button from "../../Atoms/Button/Button";
import Header from "../../Components/Header";
import Icons from "../../Components/Icons";
import Line from "../../Molecules/Line/Line";
import SignOrLogLink from "../../Molecules/SignOrLogLink/SignOrLogLink";
import CheckboxPass from "../../Molecules/CheckboxPass/CheckboxPass";
import ForgotPass from "../../Components/ForgotPass";
import FormInput from "../../Molecules/InputAndLabel/InputAndLabel";

const Login: React.FC = () => {
  const [checkboxValue, setCheckboxValue] = useState(false);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxValue(event.target.checked);
  };

  const [emailValue, setEmailValue] = useState("");

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const [passwordValue, setPasswordValue] = useState("");

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onButtonClick = () => {
    // eslint-disable-next-line no-console
    console.log(emailValue, passwordValue, checkboxValue);
  };

  const emailFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailFocus.current?.focus();
  }, []);

  return (
    <Tile>
      <TileContainer>
        <Header>LOGIN</Header>
        <InputsContainer>
          <FormInput
            type="Email"
            setInputValue={handleEmail}
            emailFocus={emailFocus}
          >
            Email
          </FormInput>
          <FormInput type="password" setInputValue={handlePassword}>
            Password
          </FormInput>
        </InputsContainer>
        <CheckboxPass handleCheckbox={handleCheckbox}>
          Remember me?
        </CheckboxPass>
        <Button onClick={onButtonClick}> LOGIN </Button>
        <ForgotPass text="Forgot Password?" />
        <Line>OR</Line>
        <Icons />
        <SignOrLogLink linkText="SIGN UP" link="/SignUp">
          Need an account?
        </SignOrLogLink>
      </TileContainer>
    </Tile>
  );
};

export default Login;

/*


*/
