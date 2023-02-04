import React, { useState } from "react";
import LoginTemplate from "../../Templates/LoginTemplate/LoginTemplate";

const Login: React.FC = () => {
  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxValue(event.target.checked);
  };

  const [emailValue, setEmailValue] = useState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const [passwordValue, setPasswordValue] = useState("");

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const onButtonClick = () => {
    console.log(emailValue, passwordValue, checkboxValue);
  };

  return (
    <LoginTemplate
      handleEmail={handleEmail}
      handlePassword={handlePassword}
      onButtonClick={onButtonClick}
      handleCheckbox={handleCheckbox}
    />
  );
};

export default Login;

/*
 Tu nazwy LoginPage itd. 
 staty na poziomie templaty a tu tylko funkcje przyjmujące jako paramet itd
 Tu  tylko kliknięcia w ikone, przycisk 
  const ref = useRef(null);

  const handleFocus = () => {
    ref.current.focus();
  };
*/
