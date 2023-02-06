import React, { useState } from "react";
import { Background, MaxWidth, Tile, TileContainer } from "./TemplatesStyles";
import FormSignUp from "../../Organisms/FormSignUp/FormSignUp";
import LineSection from "../../Organisms/LineSection/LineSection";

export interface SignUpTemplateProps {
  onButtonClick: (email: any, password: any, checkbox: any) => void;
  onClickIcon: any;
}

const SignUpTemplate: React.FC<SignUpTemplateProps> = ({
  onButtonClick,
  onClickIcon,
}) => {
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
            <FormSignUp
              handleEmail={handleEmail}
              handlePassword={handlePassword}
              onButtonClick={() => {
                onButtonClick(emailValue, passwordValue, "No checkbox here");
              }}
            />
            <LineSection
              lineText="OR"
              link="/Login"
              linkText="LOGIN"
              onClickIcon={onClickIcon}
              logs={IconsLogs}
            >
              Already a user?
            </LineSection>
          </TileContainer>
        </Tile>
      </MaxWidth>
    </Background>
  );
};

export default SignUpTemplate;
