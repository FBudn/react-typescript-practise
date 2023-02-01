import React from "react";
import { Background, MaxWidth, Tile, TileContainer } from "./TemplatesStyles";
import FormSignUp from "../Organisms/FormsSection/FormSignUp";
import LineSection from "../Organisms/LineIconsLink/LineSection";

export interface SignUpTemplateProps {
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
}

const SignUpTemplate: React.FC<SignUpTemplateProps> = ({
  onButtonClick,
  handleEmail,
  handlePassword,
}) => {
  /* const emailFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailFocus.current?.focus();
  }, []); */

  return (
    <Background>
      <MaxWidth>
        <Tile>
          <TileContainer>
            <FormSignUp
              handleEmail={handleEmail}
              handlePassword={handlePassword}
              onButtonClick={onButtonClick}
            />
            <LineSection
              lineText="OR"
              link="/Login"
              signOrLogText="Already a user?"
              linkText="LOGIN"
            />
          </TileContainer>
        </Tile>
      </MaxWidth>
    </Background>
  );
};

export default SignUpTemplate;
