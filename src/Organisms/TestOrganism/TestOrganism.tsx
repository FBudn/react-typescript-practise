/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import { InputAtom } from "../../Atoms/Input/InputStyle";
import { InputTest } from "./TestOrganismStyle";

const TestOrganism = forwardRef(function TestOrganism(props: any, ref) {
  const { label, ...otherProps } = props;
  return (
    <InputTest>
      {label}
      <InputAtom {...otherProps} ref={ref} />
    </InputTest>
  );
});

export default TestOrganism;
