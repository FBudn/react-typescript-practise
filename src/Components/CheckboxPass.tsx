import React from "react";
import { CheckboxContainer } from "./Styles";

export interface CheckboxProps {
  text: string;
}

const CheckboxPass: React.FC<CheckboxProps> = ({ text }) => {
  return (
    <CheckboxContainer>
      <input className="cursor-pointer" type="checkbox" />
      {text}
    </CheckboxContainer>
  );
};

export default CheckboxPass;
