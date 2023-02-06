/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { forwardRef } from "react";
import { Background, MaxWidth } from "./SignUpTemplate/TemplatesStyles";
import TestOrganism from "../Organisms/TestOrganism";

const TestTemplate = forwardRef(function TestTemplate(props: any, ref) {
  const { label } = props;
  return (
    <Background>
      <MaxWidth>
        <TestOrganism label={label} ref={ref} />
      </MaxWidth>
    </Background>
  );
});

export default TestTemplate;
