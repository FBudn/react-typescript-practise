import React, { useEffect, useRef } from "react";
import {
  Background,
  MaxWidth,
  SignUpTemplateContainer,
  Tile,
  TileContainer,
} from "./TemplatesStyles";
import FormSignUp, {
  RefHandlerSignUp,
} from "../../Organisms/FormSignUp/FormSignUp";
import LineSection from "../../Organisms/LineSection/LineSection";
import GlobalStyle from "../GlobalStyle/GlobalStyle";

export interface SignUpTemplateProps {
  onButtonClick: (
    email: undefined | string,
    password: undefined | string,
    checkbox: string,
  ) => void;
  onClickIcon: (number: number, logs: string[]) => void;
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

const SignUpTemplate: React.FC<SignUpTemplateProps> = ({
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
  const FormSignUpRef = useRef<RefHandlerSignUp>(null);
  useEffect(() => {
    FormSignUpRef.current?.focus();
  }, []);
  return (
    <SignUpTemplateContainer data-testid={testId}>
      <GlobalStyle data-testid={testIdGlobalStyle} />
      <Background data-testid={testIdBackground}>
        <MaxWidth data-testid={testIdMaxWidth}>
          <Tile data-testid={testIdTile}>
            <TileContainer data-testid={testIdTileContainer}>
              <FormSignUp
                onButtonClick={onButtonClick}
                ref={FormSignUpRef}
                testIdButton={testIdButton}
              />
              <LineSection
                testIdButton={testIdButtonLink}
                lineText="OR"
                linkText="LOGIN"
                onClickIcon={onClickIcon}
                logs={IconsLogs}
                onClickLink={() => {
                  onClickLink(`/Login`);
                }}
              >
                Already a user?
              </LineSection>
            </TileContainer>
          </Tile>
        </MaxWidth>
      </Background>
    </SignUpTemplateContainer>
  );
};

export default SignUpTemplate;

/*
Jak w logintemplate i chyba nie mam jednak rozjazdu w tabeli z logami

  const [emailValue, setEmailValue] = useState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const [passwordValue, setPasswordValue] = useState("");

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

*/
