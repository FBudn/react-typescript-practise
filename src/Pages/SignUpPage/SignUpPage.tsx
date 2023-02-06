import React from "react";
import SignUpTemplate from "../../Templates/SignUpTemplate/SignUpTemplate";

const SignUp: React.FC = () => {
  const onButtonClick = (email: any, password: any, checkbox: any) => {
    console.log(email, password, checkbox);
  };

  const IconsLogs = [`Google Clicked`, `Facebook Clicked`, `LinkedIn Clicked`];

  const onClickIcon = (i: number) => {
    console.log(IconsLogs[i]);
  };

  return (
    <SignUpTemplate onButtonClick={onButtonClick} onClickIcon={onClickIcon} />
  );
};

export default SignUp;
