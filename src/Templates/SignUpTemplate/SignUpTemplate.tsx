import React, { useEffect, useRef } from "react";
import {
  Background,
  MaxWidth,
  SignUpTemplateContainer,
  Tile,
  TileContainer,
} from "./Templates.styles";
import FormSignUp, {
  RefHandlerSignUp,
} from "../../Organisms/FormSignUp/FormSignUp";
import Footer from "../../Organisms/Footer/Footer";

export interface SignUpTemplateProps {
  onButtonClick: (
    email: undefined | string,
    password: undefined | string,
  ) => void;
  onClickIcon: (i: string) => void;
  onClickLink: (url: string) => void;
  testId?: string;
}

const SignUpTemplate: React.FC<SignUpTemplateProps> = ({
  onButtonClick,
  onClickIcon,
  onClickLink,
  testId,
}) => {
  const FormSignUpRef = useRef<RefHandlerSignUp>(null);
  useEffect(() => {
    FormSignUpRef.current?.focus();
  }, []);
  return (
    <SignUpTemplateContainer data-testid={testId}>
      <Background data-testid="test-background-id">
        <MaxWidth data-testid="test-maxWidth-id">
          <Tile data-testid="test-tile-id">
            <TileContainer data-testid="test-tileContainer-id">
              <FormSignUp onButtonClick={onButtonClick} ref={FormSignUpRef} />
              <Footer
                lineText="OR"
                linkText="LOGIN"
                onClickIcon={onClickIcon}
                infoText="Already a user?"
                onClickLink={() => {
                  onClickLink(`/Login`);
                }}
              />
            </TileContainer>
          </Tile>
        </MaxWidth>
      </Background>
    </SignUpTemplateContainer>
  );
};

export default SignUpTemplate;
