import React, { forwardRef } from "react";
import { CheckboxContainer } from "./CheckboxPassStyle";
import CheckboxInput from "../../Atoms/CheckboxInput/CheckboxInput";

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
      {children}
    </CheckboxContainer>
  );
});

export default CheckboxPass;

/*
 onChangeCheckbox={onChangeCheckbox}
Nazwy: CheckboxBox i CheckboxInput nazwy ujednolicone
*/
