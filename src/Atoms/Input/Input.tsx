import React from "react";
import { InputAtom } from "./InputStyle";

export interface InputProps {
  type: string;
  setInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, setInputValue }) => {
  return <InputAtom type={type} onChange={setInputValue} required />;
};

export default Input;

/*

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
