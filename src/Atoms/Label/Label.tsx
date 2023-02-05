import React from "react";
import { LabelContainer } from "./LabelStyle";

export interface LabelProps {
  children: string;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return <LabelContainer> {children} </LabelContainer>;
};

export default Label;
