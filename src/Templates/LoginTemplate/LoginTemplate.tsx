import React, { useEffect, useRef } from "react";
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
import GlobalStyle from "../GlobalStyle/GlobalStyle";
import { LoginTemplateContainer } from "./TemplatesStyles";

export interface LoginTemplateProps {
  onButtonClick: (
    email: undefined | string,
    password: undefined | string,
    checkbox: undefined | boolean,
  ) => void;
  onClickIcon: (number: number, logs: []) => void;
  onClickLink: (url: string) => void;
  testId?: string;
  testIdButton?: string;
  testIdButtonLink?: string;
  testIdGlobalStyle?: string;
  testIdBackground?: string;
  testIdMaxWidth?: string;
  testIdTile?: string;
  testIdTileContainer?: string;
}

const LoginTemplate: React.FC<LoginTemplateProps> = ({
  onButtonClick,
  onClickIcon,
  onClickLink,
  testId,
  testIdButton,
  testIdButtonLink,
  testIdGlobalStyle,
  testIdBackground,
  testIdMaxWidth,
  testIdTile,
  testIdTileContainer,
}) => {
  const IconsLogs = [`Google Clicked`, `Facebook Clicked`, `LinkedIn Clicked`];
  const FormLoginRef = useRef<RefHandlerLogin>(null);
  useEffect(() => {
    FormLoginRef.current?.focus();
  }, []);
  return (
    <LoginTemplateContainer data-testid={testId}>
      <GlobalStyle data-testid={testIdGlobalStyle} />
      <Background data-testid={testIdBackground}>
        <MaxWidth data-testid={testIdMaxWidth}>
          <Tile data-testid={testIdTile}>
            <TileContainer data-testid={testIdTileContainer}>
              <FormLogin
                onButtonClick={onButtonClick}
                ref={FormLoginRef}
                testIdButton={testIdButton}
              />
              <LineSection
                testIdButton={testIdButtonLink}
                lineText="OR"
                linkText="SIGN UP"
                onClickIcon={onClickIcon}
                logs={IconsLogs}
                onClickLink={() => {
                  onClickLink("/SignUp");
                }}
              >
                Need an account?
              </LineSection>
            </TileContainer>
          </Tile>
        </MaxWidth>
      </Background>
    </LoginTemplateContainer>
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
