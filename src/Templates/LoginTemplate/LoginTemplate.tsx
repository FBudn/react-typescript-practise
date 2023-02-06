import React, { useState } from "react";
import {
  Background,
  MaxWidth,
  Tile,
  TileContainer,
} from "../SignUpTemplate/TemplatesStyles";
import FormLogin from "../../Organisms/FormLogin/FormLogin";
import LineSection from "../../Organisms/LineSection/LineSection";

export interface LoginTemplateProps {
  onButtonClick: (email: any, password: any, checkbox: any) => void;
  onClickIcon: any;
}

const LoginTemplate: React.FC<LoginTemplateProps> = ({
  onButtonClick,
  onClickIcon,
}) => {
  const [checkboxValue, setCheckboxValue] = useState(false);

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const IconsLogs = [`Google Clicked`, `Facebook Clicked`, `LinkedIn Clicked`];

  return (
    <Background>
      <MaxWidth>
        <Tile>
          <TileContainer>
            <FormLogin
              onChangeCheckbox={onChangeCheckbox}
              handleEmail={handleEmail}
              handlePassword={handlePassword}
              onButtonClick={() => {
                onButtonClick(emailValue, passwordValue, checkboxValue);
              }}
            />
            <LineSection
              lineText="OR"
              link="/SignUp"
              linkText="SIGN UP"
              onClickIcon={onClickIcon}
              logs={IconsLogs}
            >
              Need an account?
            </LineSection>
          </TileContainer>
        </Tile>
      </MaxWidth>
    </Background>
  );
};

export default LoginTemplate;

/*

Kafel mógłby być atomem
  handleFocus={handleFocus}
              ref={ref}

*/
