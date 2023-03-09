import React, { forwardRef } from "react";
import { CheckboxContainer } from "./CheckboxAndLabelStyle";
import CheckboxInput from "../../Atoms/CheckboxInput/CheckboxInput";
import Label from "../../Atoms/TextLabel/TextLabel";

export interface CheckboxAndLabelProps {
  children: React.ReactNode;
  testId?: string;
  testIdCheckbox?: string;
  // onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type CheckboxRef = HTMLInputElement;
const CheckboxAndLabel = forwardRef<CheckboxRef, CheckboxAndLabelProps>(
  (props, ref) => (
    <CheckboxContainer data-testid={props.testId}>
      <CheckboxInput id="c" ref={ref} testId={props.testIdCheckbox} />
      <Label
        color="rgb(82 82 91)"
        align="center"
        justify="start"
        fontSize="1rem"
        fontWeight="500"
      >
        {props.children}
      </Label>
    </CheckboxContainer>
  ),
);

export default CheckboxAndLabel;

/*

CheckboxContainer - powinno być jak folderu i komponentu CheckboxAndLabelContainer pewnie?
Ogólnie ta molekuła jest jednorazowa w tym projekcie więc mogłaby być osobnym bytem 
zamiast osobno checkboxInputa i labelu? 
Tylko cała gotowa molekuła jak tu też "Line"?


 onChangeCheckbox={onChangeCheckbox}
Nazwy: CheckboxBox i CheckboxInput nazwy ujednolicone
*/
