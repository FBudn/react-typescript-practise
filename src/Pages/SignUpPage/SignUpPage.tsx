import React from "react";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../../GlobalStyle/GlobalStyle";
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
    <>
      <GlobalStyle />
      <SignUpTemplate
        onButtonClick={onButtonClick}
        onClickIcon={onClickIcon}
        onClickLink={onClickLink}
      />
    </>
  );
};

export default SignUpPage;

// useNavigate poprawki
