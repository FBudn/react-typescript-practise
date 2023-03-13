import React, { forwardRef } from "react";
import { CheckboxAndLabelContainer } from "./CheckboxAndLabel.style";
import CheckboxInput from "../../Atoms/CheckboxInput/CheckboxInput";
import Label from "../../Atoms/TextLabel/TextLabel";

export interface CheckboxAndLabelProps {
  children: React.ReactNode;
  testId?: string;
  testIdCheckbox?: string;
}

export type CheckboxRef = HTMLInputElement;
const CheckboxAndLabel = forwardRef<CheckboxRef, CheckboxAndLabelProps>(
  (props, ref) => (
    <CheckboxAndLabelContainer data-testid={props.testId}>
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
    </CheckboxAndLabelContainer>
  ),
);

export default CheckboxAndLabel;
