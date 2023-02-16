import React, { forwardRef } from "react";
import { CheckboxContainer } from "./CheckboxAndLabelStyle";
import CheckboxInput from "../../Atoms/CheckboxInput/CheckboxInput";
import Label from "../../Atoms/TextLabel/TextLabel";

export interface CheckboxAndLabelProps {
  children: React.ReactNode;
  // onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type CheckboxRef = HTMLInputElement;
const CheckboxAndLabel = forwardRef<CheckboxRef, CheckboxAndLabelProps>(
  (props, ref) => (
    <CheckboxContainer>
      <CheckboxInput id="c" ref={ref} />
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
 onChangeCheckbox={onChangeCheckbox}
Nazwy: CheckboxBox i CheckboxInput nazwy ujednolicone
*/
