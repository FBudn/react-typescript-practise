import React from "react";
import { Background, MaxWidth, Tile, TileContainer } from "./TemplatesStyles";
import FormSignUp from "../../Organisms/FormSignUp/FormSignUp";
import LineSection from "../../Organisms/LineSection/LineSection";

export interface SignUpTemplateProps {
  onButtonClick: (
    email: undefined | string,
    password: undefined | string,
    checkbox: string,
  ) => void;
  onClickIcon: (number: number, logs: []) => void;
  onClickLink: (url: string) => void;
}

const SignUpTemplate: React.FC<SignUpTemplateProps> = ({
  onButtonClick,
  onClickIcon,
  onClickLink,
}) => {
  const IconsLogs = [`Google Clicked`, `Facebook Clicked`, `LinkedIn Clicked`];

  return (
    <Background>
      <MaxWidth>
        <Tile>
          <TileContainer>
            <FormSignUp onButtonClick={onButtonClick} />
            <LineSection
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
  );
};

export default SignUpTemplate;

/*
  const [emailValue, setEmailValue] = useState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const [passwordValue, setPasswordValue] = useState("");

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

*/
