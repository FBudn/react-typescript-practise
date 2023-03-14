import React, { useEffect, useRef } from "react";
import {
  Background,
  MaxWidth,
  Tile,
  TileContainer,
} from "../SignUpTemplate/Templates.styles";
import FormLogin, {
  RefHandlerLogin,
} from "../../Organisms/FormLogin/FormLogin";
import Footer from "../../Organisms/Footer/Footer";
import { LoginTemplateContainer } from "./Templates.styles";

export interface LoginTemplateProps {
  onButtonClick: (
    email: undefined | string,
    password: undefined | string,
    checkbox: undefined | boolean,
  ) => void;
  onClickIcon: (number: number, logs: string[]) => void;
  onClickLink: (url: string) => void;
  testId?: string;

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
  testIdButtonLink,
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
      <Background data-testid={testIdBackground}>
        <MaxWidth data-testid={testIdMaxWidth}>
          <Tile data-testid={testIdTile}>
            <TileContainer data-testid={testIdTileContainer}>
              <FormLogin onButtonClick={onButtonClick} ref={FormLoginRef} />
              <Footer
                testIdButton={testIdButtonLink}
                lineText="OR"
                linkText="SIGN UP"
                onClickIcon={onClickIcon}
                logs={IconsLogs}
                infoText="Need an account?"
                onClickLink={() => {
                  onClickLink("/SignUp");
                }}
              />
            </TileContainer>
          </Tile>
        </MaxWidth>
      </Background>
    </LoginTemplateContainer>
  );
};

export default LoginTemplate;
