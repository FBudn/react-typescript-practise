import React from "react";
import LoginTemplate from "../../Templates/LoginTemplate/LoginTemplate";

const Login: React.FC = () => {
  const onButtonClick = (email: any, password: any, checkbox: any) => {
    console.log(email, password, checkbox);
  };

  const IconsLogs = [`Google Clicked`, `Facebook Clicked`, `LinkedIn Clicked`];

  const onClickIcon = (i: number) => {
    console.log(IconsLogs[i]);
  };

  return (
    <LoginTemplate onButtonClick={onButtonClick} onClickIcon={onClickIcon} />
  );
};

export default Login;

/*
 Tu nazwy LoginPage itd. 
 staty na poziomie templaty a tu tylko funkcje przyjmujące jako paramet itd
 Tu  tylko kliknięcia w ikone, przycisk, link
  const ref = useRef(null);

  const handleFocus = () => {
    ref.current.focus();
  };
*/
