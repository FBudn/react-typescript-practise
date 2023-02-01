import React, { useState } from "react";
import LoginTemplate from "../../Templates/LoginTemplate";

const Login: React.FC = () => {
  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxValue(event.target.checked);
  };

  const [emailValue, setEmailValue] = useState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const [passwordValue, setPasswordValue] = useState("");

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const onButtonClick = () => {
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
