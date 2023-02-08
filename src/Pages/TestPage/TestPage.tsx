/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
import { useRef } from "react";
import TestTemplate from "../../Templates/TestTemplate";

export default function Form() {
  const ref = useRef<HTMLInputElement>();

  function handleClick() {
    if (ref.current !== undefined) {
      ref.current.focus();
    }
  }

  function onChangeInput() {
    if (ref.current !== undefined) console.log(ref.current.value);
  }

  return (
    <form>
      <TestTemplate
        label="Enter your name:"
        ref={ref}
        handleClick={handleClick}
        onChangeInput={onChangeInput}
      />
    </form>
  );
}
