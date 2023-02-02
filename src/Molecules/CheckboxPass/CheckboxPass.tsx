import React from "react";
import { CheckboxContainer } from "./CheckboxPassStyle";
import CheckboxInput from "../../Atoms/CheckboxBox/CheckboxBox";

export interface CheckboxProps {
  children: React.ReactNode;
  handleCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxPass: React.FC<CheckboxProps> = ({
  handleCheckbox,
  children,
}: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <CheckboxInput handleCheckbox={handleCheckbox} />
      {children}
    </CheckboxContainer>
  );
};

export default CheckboxPass;

/*
Nazwy: CheckboxBox i CheckboxInput nazwy ujednolicone
*/
