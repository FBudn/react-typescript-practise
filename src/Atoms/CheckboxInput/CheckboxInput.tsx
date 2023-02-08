import React, { forwardRef } from "react";
import { CheckboxInputStyle } from "./CheckboxInputStyle";

export interface CheckboxInputProps {
  // onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref: any;
}

const CheckboxInput = forwardRef(function CheckboxInput(props: any, ref: any) {
  return <CheckboxInputStyle ref={ref} />;
});

export default CheckboxInput;

/* onChange={onChangeCheckbox}
const TestOrganism = forwardRef(function TestOrganism(props: any, ref) {
  const { label, onChangeInput, ...otherProps } = props;
  return (
    <InputTest>
      {label}
      <InputAtom {...otherProps} ref={ref} onChange={onChangeInput} />
    </InputTest>
  );
});

onChange na poziomie atomu z nazwą też onChangeCośtam

import { forwardRef } from "react";
import { CheckboxInputStyle } from "./CheckboxInputStyle";

const CheckboxInput = forwardRef(function CheckboxInput(props, ref) {
  const  onChangeCheckbox  = props;

  return (
  <CheckboxInputStyle onChange={onChangeCheckbox} ref={ref} />;
);
});

export default CheckboxInput;
*/
