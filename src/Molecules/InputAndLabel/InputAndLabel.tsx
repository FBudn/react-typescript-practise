import React from "react";
import Input from "../../Atoms/Input/Input";
import Label from "../../Atoms/Label/Label";
import { OneInputContainer } from "./InputLabelStyles";

export interface InputAndLabelProps {
  children: React.ReactNode;
  type: string;
  setInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputAndLabel: React.FC<InputAndLabelProps> = ({
  children,
  type,
  setInputValue,
}) => {
  return (
    <OneInputContainer>
      <Label
        color="rgb(82 82 91)"
        align="center"
        justify="start"
        fontSize="1.1rem"
        fontWeight="500"
      >
        {children}
      </Label>
      <Input
        type={type}
        setInputValue={setInputValue}
        // autoFocus
      />
    </OneInputContainer>
  );
};

export default InputAndLabel;

/*
Tu zrobić jak mam forgotpass to zrobić mu nazwę label - mam uniwersalny komponent wykorzystywany do nadawania nazw. 
Jest to do wykorzystania zamiast tworzyć InputLabel w styled-componets. 
Molekuła i wyżej ze styled-components importowane rzeczy to głównie powinien być div. Po to są atomy, żeby z nich składać w większości


 handleFocus={handleFocus}
        ref={ref}
*/
