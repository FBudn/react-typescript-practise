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
  onClickIcon: (icon: string) => void;
  onClickLink: (url: string) => void;
  testId?: string;
}

const LoginTemplate: React.FC<LoginTemplateProps> = ({
  onButtonClick,
  onClickIcon,
  onClickLink,
  testId,
}) => {
  const FormLoginRef = useRef<RefHandlerLogin>(null);
  useEffect(() => {
    FormLoginRef.current?.focus();
  }, []);
  return (
    <LoginTemplateContainer data-testid={testId}>
      <Background data-testid="test-background-id">
        <MaxWidth data-testid="test-maxWidth-id">
          <Tile data-testid="test-tile-id">
            <TileContainer data-testid="test-tileContainer-id">
              <FormLogin onButtonClick={onButtonClick} ref={FormLoginRef} />
              <Footer
                lineText="OR"
                linkText="SIGN UP"
                onClickIcon={onClickIcon}
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
