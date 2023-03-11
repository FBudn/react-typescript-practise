import React, { forwardRef } from "react";
import { CheckboxInputContainer } from "./CheckboxInput.style";

export interface CheckboxInputProps {
  id?: string;
  testId?: string;
}

export type CheckboxRef = HTMLInputElement;
const CheckboxInput = forwardRef<CheckboxRef, CheckboxInputProps>(
  ({ id, testId }, ref) => (
    <CheckboxInputContainer data-testid={testId} id={id} ref={ref} />
  ),
);

export default CheckboxInput;

/* 
Używam checkboxa tylko raz, nieużywam tu id akurat - może do usunięcia by przeszło jak jest już testoweId?
Ogólnie wszędzie może bym dodał inne wersje stylów itp, ale w sumie pod konkretny projekt nie wiem czy to 
konieczne
Nazewnictwo chyba ok


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
