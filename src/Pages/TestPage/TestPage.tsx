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

  return (
    <form>
      <TestTemplate
        label="Enter your name:"
        ref={ref}
        handleClick={handleClick}
      />
    </form>
  );
}
