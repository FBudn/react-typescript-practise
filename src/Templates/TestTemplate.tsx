/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { forwardRef } from "react";
import { Background, MaxWidth } from "./SignUpTemplate/TemplatesStyles";
import TestOrganism from "../Organisms/TestOrganism/TestOrganism";

const TestTemplate = forwardRef(function TestTemplate(props: any, ref) {
  const { label, handleClick, onChangeInput } = props;
  return (
    <Background>
      <MaxWidth>
        <TestOrganism label={label} ref={ref} onChangeInput={onChangeInput} />
        <button type="button" onClick={handleClick}>
          Edit
        </button>
      </MaxWidth>
    </Background>
  );
});

export default TestTemplate;
