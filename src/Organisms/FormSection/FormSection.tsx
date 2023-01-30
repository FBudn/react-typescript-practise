import React from "react";
import InputAndLabel from "../../Molecules/InputAndLabel/InputAndLabel";
import { InputsContainer } from "./FormSectionStyle";

export interface FormSectionProps {
  emailFocus?: any;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormSection: React.FC<FormSectionProps> = ({
  handleEmail,
  handlePassword,
  emailFocus,
}) => {
  return (
    <InputsContainer>
      <InputAndLabel
        type="email"
        setInputValue={handleEmail}
        emailFocus={emailFocus}
      >
        Email
      </InputAndLabel>
      <InputAndLabel type="password" setInputValue={handlePassword}>
        Password
      </InputAndLabel>
    </InputsContainer>
  );
};

export default FormSection;
