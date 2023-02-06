/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
import { useRef } from "react";
import TestOrganism from "../../Organisms/TestOrganism";

export default function Form() {
  const ref = useRef<HTMLButtonElement>(null);

  function handleClick() {
    if (ref.current !== null) {
      ref.current.focus();
    }
  }

  return (
    <form>
      <TestOrganism label="Enter your name:" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}
