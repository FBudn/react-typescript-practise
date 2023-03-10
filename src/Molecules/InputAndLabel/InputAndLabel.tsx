import React, { forwardRef } from "react";
import Input from "../../Atoms/Input/Input";
import Label from "../../Atoms/TextLabel/TextLabel";
import { InputAndLabelContainer } from "./InputLabelStyles";

export interface InputAndLabelProps {
  children: React.ReactNode;
  type: string;
  testId?: string;
  testIdInput?: string;
}

export type InputRef = HTMLInputElement;
const InputAndLabel = forwardRef<InputRef, InputAndLabelProps>(
  (props: InputAndLabelProps, ref) => (
    <InputAndLabelContainer data-testid={props.testId}>
      <Label
        color="rgb(82 82 91)"
        align="center"
        justify="start"
        fontSize="1.1rem"
        fontWeight="500"
      >
        {props.children}
      </Label>
      <Input
        type={props.type}
        ref={ref}
        testId={props.testIdInput}
        // autoFocus
      />
    </InputAndLabelContainer>
  ),
);

export default InputAndLabel;

/*
Nazwa containera vs komponentu i same te u mnie za długie nazwy typu xANDy itd. pewnie krócej
Tu typ inputa ew. to co wcześniej w atomie. Mam też zrobione to tak, że jest input + label a  
używam x2 sklejone 2 inputy + 2 labele to ewentualnie większa molekuła niż ta? Wtedy w 
signup page dochodzi tylko button to od razu by był organizm/cała taka duża molekuła?

Tu zrobić jak mam forgotpass to zrobić mu nazwę label - mam uniwersalny komponent wykorzystywany do nadawania nazw. 
Jest to do wykorzystania zamiast tworzyć InputLabel w styled-componets. 
Molekuła i wyżej ze styled-components importowane rzeczy to głównie powinien być div. Po to są atomy, żeby z nich składać w większości


 handleFocus={handleFocus}
        ref={ref}

        /* const InputAndLabel: React.FC<InputAndLabelProps> = ({
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
*/
