import React, { forwardRef } from "react";
import { CheckboxInputStyle } from "./CheckboxInputStyle";

export interface CheckboxInputProps {
  id?: string;
  testId?: string;
}

export type CheckboxRef = HTMLInputElement;
const CheckboxInput = forwardRef<CheckboxRef, CheckboxInputProps>(
  ({ id, testId }, ref) => (
    <CheckboxInputStyle data-testid={testId} id={id} ref={ref} />
  ),
);

export default CheckboxInput;

/* 
podkreślnik w funkcji tu: można używać do nazw zmiennych, jako ukryty nieużywany parament 

const CheckboxInput = forwardRef(function CheckboxInput(
  props: CheckboxInputProps,
  ref: CheckboxRef,
) {
  return <CheckboxInputStyle ref={ref} />;
}); 

export interface CheckboxInputProps {
  // onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // tu się nie definiuje refa , bez propsów ogarnąć dzałanie bo tu nie mam propsów i tak
  id?: string;
}
export type CheckboxRef = HTMLInputElement;
const CheckboxInput = forwardRef<CheckboxRef, CheckboxInputProps>(
  ({ id }, ref) => <CheckboxInputStyle id={id} ref={ref} />,
);

onChange={onChangeCheckbox}
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
