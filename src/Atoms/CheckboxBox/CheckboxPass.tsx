import React from "react";
import { CheckboxContainer, CheckboxInput } from "../../Components/Styles";

export interface CheckboxProps {
  children: React.ReactNode; // ReactNode może być kilka childrens
  handleCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void; // unikać any tylko stosować konkretne typy. Do funkcji jako typ () => void
}

const CheckboxPass: React.FC<CheckboxProps> = ({
  handleCheckbox,
  children,
}: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <CheckboxInput onChange={handleCheckbox} />
      {children}
    </CheckboxContainer> // children prop sprawdzić jak działa //tak?
  );
};

export default CheckboxPass;

/*
 <input
        // checked={checkboxValue}
        style={{
          maxWidth: "35px",
          width: "20px",
          maxHeight: "35px",
          height: "20px",
          margin: "5px 0px 0px 0px",
        }}
        onChange={handleCheckbox}
        name="checkboxValue"
       
        type="checkbox"
      />

*/
