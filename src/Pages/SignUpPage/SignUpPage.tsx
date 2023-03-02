import React from "react";
import SignUpTemplate from "../../Templates/SignUpTemplate/SignUpTemplate";

export interface TestProps {
  onClickLink: (url: string) => void;
}

const SignUpPage: React.FC<TestProps> = ({ onClickLink }) => {
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

  return (
    <SignUpTemplate
      onButtonClick={onButtonClick}
      onClickIcon={onClickIcon}
      onClickLink={onClickLink}
    />
  );
};

export default SignUpPage;

// useNavigate poprawki
