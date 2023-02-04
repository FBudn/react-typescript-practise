import React from "react";
import { CheckboxContainer } from "./CheckboxPassStyle";
import CheckboxInput from "../../Atoms/CheckboxInput/CheckboxInput";

export interface CheckboxProps {
  children: React.ReactNode;
  onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxPass: React.FC<CheckboxProps> = ({
  onChangeCheckbox,
  children,
}: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <CheckboxInput onChangeCheckbox={onChangeCheckbox} />
      {children}
    </CheckboxContainer>
  );
};

export default CheckboxPass;

/*
Nazwy: CheckboxBox i CheckboxInput nazwy ujednolicone
*/
