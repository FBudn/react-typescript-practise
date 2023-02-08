import React, { forwardRef } from "react";
import { CheckboxContainer } from "./CheckboxPassStyle";
import CheckboxInput from "../../Atoms/CheckboxInput/CheckboxInput";
import Label from "../../Atoms/Label/Label";

export interface CheckboxProps {
  children: React.ReactNode;
  // onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref: any;
}

const CheckboxPass = forwardRef(function CheckboxPass(props: any, ref) {
  const { children } = props;
  return (
    <CheckboxContainer>
      <CheckboxInput ref={ref} />
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

export default CheckboxPass;

/*
 onChangeCheckbox={onChangeCheckbox}
Nazwy: CheckboxBox i CheckboxInput nazwy ujednolicone
*/
