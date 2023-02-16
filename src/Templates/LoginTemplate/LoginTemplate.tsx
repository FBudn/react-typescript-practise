/* eslint-disable react/button-has-type */
import React, { useRef } from "react";
import {
  Background,
  MaxWidth,
  Tile,
  TileContainer,
} from "../SignUpTemplate/TemplatesStyles";
import FormLogin, {
  RefHandlerLogin,
} from "../../Organisms/FormLogin/FormLogin";
import LineSection from "../../Organisms/LineSection/LineSection";

export interface LoginTemplateProps {
  onButtonClick: (email: string, password: string, checkbox: string) => void;
  onClickIcon: (number: number, logs: []) => void;
  onClickLink: (url: string) => void;
}

const LoginTemplate: React.FC<LoginTemplateProps> = ({
  onButtonClick,
  onClickIcon,
  onClickLink,
}) => {
  const IconsLogs = [`Google Clicked`, `Facebook Clicked`, `LinkedIn Clicked`];
  const childRef = useRef<RefHandlerLogin>(null);
  return (
    <Background>
      <MaxWidth>
        <Tile>
          <TileContainer>
            <FormLogin onButtonClick={onButtonClick} />
            <LineSection
              lineText="OR"
              linkText="SIGN UP"
              onClickIcon={onClickIcon}
              logs={IconsLogs}
              onClickLink={() => {
                onClickLink(`/SignUp`);
              }}
            >
              Need an account?
            </LineSection>
            <button
              onClick={() => {
                console.log(childRef?.current?.TestRef?.current?.value);
              }}
            >
              {" "}
              tu{" "}
            </button>
          </TileContainer>
        </Tile>
      </MaxWidth>
    </Background>
  );
};

export default LoginTemplate;

/*
Optional chaining
Kafel mógłby być atomem
  handleFocus={handleFocus}
              ref={ref}

              /* const [emailValue, setEmailValue] = useState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  }; 
    const [passwordValue, setPasswordValue] = useState("");

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };
  
*/
