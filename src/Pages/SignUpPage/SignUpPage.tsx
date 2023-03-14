import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpTemplate from "../../Templates/SignUpTemplate/SignUpTemplate";

const SignUpPage: React.FC = () => {
  const onButtonClick = (
    email: undefined | string,
    password: undefined | string,
  ) => {
    console.log(email, password);
  };

  const IconsLogs = [`Google Clicked`, `Facebook Clicked`, `LinkedIn Clicked`];

  const onClickIcon = (i: number) => {
    console.log(IconsLogs[i]);
  };
  const navigate = useNavigate();
  const onClickLink = (url: string) => {
    navigate(url);
  };

  return (
    <SignUpTemplate
      testId="test-signUpPage-id"
      onButtonClick={onButtonClick}
      onClickIcon={onClickIcon}
      onClickLink={onClickLink}
      IconsLogs={IconsLogs}
    />
  );
};

export default SignUpPage;
