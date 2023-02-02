import React from "react";
import { InputAtom } from "./InputStyle";

export interface InputProps {
  type: string;
  setInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  emailFocus?: any;
}

const Input: React.FC<InputProps> = ({ type, setInputValue, emailFocus }) => {
  return (
    <InputAtom type={type} onChange={setInputValue} ref={emailFocus} required />
  );
};

export default Input;

/*

const Input = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView();
        },
      };
    },
    [],
  );

  // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-props-no-spreading
  return <InputAtom {...props} ref={inputRef} />;
});


*/
