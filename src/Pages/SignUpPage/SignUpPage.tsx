import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpTemplate from "../../Templates/SignUpTemplate/SignUpTemplate";

const SignUpPage: React.FC = () => {
  const onButtonClick = (
    email: undefined | string,
    password: undefined | string,
    checkbox: string,
  ) => {
    console.log(email, password, checkbox);
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
      testIdButton="test-button-id"
      onButtonClick={onButtonClick}
      onClickIcon={onClickIcon}
      onClickLink={onClickLink}
    />
  );
};

export default SignUpPage;

// tu widzę, że powtarza mi się bez sensu tabela logów więc to do poprawki, pytanie która
// wersja lepsza, pewnie z login page
