import React from "react";
import LoginTemplate from "../../Templates/LoginTemplate/LoginTemplate";

export interface TestProps {
  onClickLink: (url: string) => void;
}

const LoginPage: React.FC<TestProps> = ({ onClickLink }) => {
  const onButtonClick = (
    email: undefined | string,
    password: undefined | string,
    checkbox: undefined | boolean,
  ) => {
    console.log(email, password, checkbox);
  };

  const onClickIcon = (number: number, logs: []) => {
    console.log(logs[number]);
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
