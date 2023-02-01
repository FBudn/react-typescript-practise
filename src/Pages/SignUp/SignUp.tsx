import React, { useEffect, useRef, useState } from "react";
import SignUpTemplate from "../../Templates/SignUpTemplate";

const SignUp: React.FC = () => {
  const [emailValue, setEmailValue] = useState("");
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const [passwordValue, setPasswordValue] = useState("");

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const onButtonClick = () => {
    console.log(emailValue, passwordValue);
  };

  const emailFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailFocus.current?.focus();
  }, []);

  return (
    <SignUpTemplate
      handleEmail={handleEmail}
      handlePassword={handlePassword}
      onButtonClick={onButtonClick}
    />
  );
};

export default SignUp;
