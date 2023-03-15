import React from "react";
import { useNavigate } from "react-router-dom";
import LoginTemplate from "../../Templates/LoginTemplate/LoginTemplate";

const LoginPage: React.FC = () => {
  const onButtonClick = (
    email: undefined | string,
    password: undefined | string,
    checkbox: undefined | boolean,
  ) => {
    console.log(email, password, checkbox);
  };

  const onClickIcon = (i: string) => {
    console.log(i);
  };

  const navigate = useNavigate();
  const onClickLink = (url: string) => {
    navigate(url);
  };

  return (
    <LoginTemplate
      testId="test-loginPage-id"
      onButtonClick={onButtonClick}
      onClickIcon={onClickIcon}
      onClickLink={onClickLink}
    />
  );
};

export default LoginPage;
