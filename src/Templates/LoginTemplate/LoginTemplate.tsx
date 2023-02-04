import React from "react";
import {
  Background,
  MaxWidth,
  Tile,
  TileContainer,
} from "../SignUpTemplate/TemplatesStyles";
import FormLogin from "../../Organisms/FormLogin/FormLogin";
import LineSection from "../../Organisms/LineSection/LineSection";

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
    <Background>
      <MaxWidth>
        <Tile>
          <TileContainer>
            <FormLogin
              handleCheckbox={handleCheckbox}
              handleEmail={handleEmail}
              handlePassword={handlePassword}
              onButtonClick={onButtonClick}
            />
            <LineSection lineText="OR" link="/SignUp" linkText="SIGN UP">
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
