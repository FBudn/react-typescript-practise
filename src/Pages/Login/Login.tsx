import React, { useState } from "react";
import LoginTemplate from "../../Templates/LoginTemplate";

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

  return (
    <LoginTemplate
      handleEmail={handleEmail}
      handlePassword={handlePassword}
      onButtonClick={onButtonClick}
      handleCheckbox={handleCheckbox}
    />
  );
};

export default Login;

/*
<FormSection
          handleEmail={handleEmail}
          handlePassword={handlePassword}
          emailFocus={emailFocus}
        />
        <CheckboxPass handleCheckbox={handleCheckbox}>
          Remember me?
        </CheckboxPass>
        <Button onClick={onButtonClick}> LOGIN </Button>
        <ForgotPass text="Forgot Password?" />

*/
