import React from "react";
import { Tile, TileContainer } from "./TemplatesStyles";
import FormLogin from "../Organisms/FormsSection/FormLogin";
import LineSection from "../Organisms/LineIconsLink/LineSection";

export interface LoginTemplateProps {
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
  handleCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginTemplate: React.FC<LoginTemplateProps> = ({
  onButtonClick,
  handleEmail,
  handlePassword,
  handleCheckbox,
}) => {
  return (
    <Tile>
      <TileContainer>
        <FormLogin
          handleCheckbox={handleCheckbox}
          handleEmail={handleEmail}
          handlePassword={handlePassword}
          onButtonClick={onButtonClick}
        />
        <LineSection
          lineText="OR"
          link="/SignUp"
          signOrLogText="Need an account?"
          linkText="SIGN UP"
        />
      </TileContainer>
    </Tile>
  );
};

export default LoginTemplate;
