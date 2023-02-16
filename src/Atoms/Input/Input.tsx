/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";
import { InputAtom } from "./InputStyle";

export interface InputProps {
  type: string;
}

export type InputRef = HTMLInputElement;
const Input = forwardRef<InputRef, InputProps>((props: InputProps, ref) => (
  <InputAtom type={props.type} ref={ref} />
));

export default Input;

/*
/*
(e: React.ChangeEvent<HTMLInputElement>) => void;
const Input: React.FC<InputProps> = ({ type, setInputValue }) => {
  return <InputAtom type={type} onChange={setInputValue} required />;
};
Atomy: 
ForgotPass używam jako tylko tekst, trochę nie wiadomo co to jest, można by to nazwać label, nazwa bardziej określająca co to jest tu
niż to do czego będę to stosował


const Input = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        }
      };
    },
    [],
  );

  // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-props-no-spreading
  return <InputAtom {...props} ref={inputRef} />;
});


*/
