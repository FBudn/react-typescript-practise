/* eslint-disable import/no-named-as-default */
import React, { useEffect, useRef, useState } from "react";
import SignUpTemplate from "../../Templates/SignUpTemplate";

const SignUp: React.FC = () => {
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

// <EmailInput email="Email" setInputValue={handleEmail} />

/*
 <FormSection
          handleEmail={handleEmail}
          handlePassword={handlePassword}
          emailFocus={emailFocus}
        />
        <Button onClick={onButtonClick}> SIGN UP </Button>
*/
