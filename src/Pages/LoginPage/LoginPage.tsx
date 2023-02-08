/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { useNavigate } from "react-router-dom";
import LoginTemplate from "../../Templates/LoginTemplate/LoginTemplate";

const LoginPage: React.FC = () => {
  const onButtonClick = (email: any, password: any, checkbox: any) => {
    console.log(email, password, checkbox);
  };

  const onClickIcon = (number: number, logs: any[]) => {
    console.log(logs[number]);
  };

  const navigate = useNavigate();
  const onClickLink = (url: string) => {
    navigate(url);
  };

  return (
    <LoginTemplate
      onButtonClick={onButtonClick}
      onClickIcon={onClickIcon}
      onClickLink={onClickLink}
    />
  );
};

export default LoginPage;

/*
 Tu nazwy LoginPage itd. 
 staty na poziomie templatów a tu tylko funkcje przyjmujące paramet itd
 Tu  tylko kliknięcia w ikone, przycisk, link
  const ref = useRef(null);

  const handleFocus = () => {
    ref.current.focus();
  };
*/
