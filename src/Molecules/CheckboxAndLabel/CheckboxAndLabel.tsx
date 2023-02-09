import React, { forwardRef } from "react";
import { CheckboxContainer } from "./CheckboxAndLabelStyle";
import CheckboxInput from "../../Atoms/CheckboxInput/CheckboxInput";
import Label from "../../Atoms/TextLabel/TextLabel";

export interface CheckboxAndLabelProps {
  children: React.ReactNode;
  // onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
  Checkboxref: any;
}

const CheckboxAndLabel = forwardRef(function CheckboxAndLabel(
  props: any,
  Checkboxref,
) {
  const { children } = props;
  return (
    <CheckboxContainer>
      <CheckboxInput ref={Checkboxref} />
      <Label
        color="rgb(82 82 91)"
        align="center"
        justify="start"
        fontSize="1rem"
        fontWeight="500"
      >
        {children}
      </Label>
    </CheckboxContainer>
  );
});

export default CheckboxAndLabel;

/*
 onChangeCheckbox={onChangeCheckbox}
Nazwy: CheckboxBox i CheckboxInput nazwy ujednolicone
*/
