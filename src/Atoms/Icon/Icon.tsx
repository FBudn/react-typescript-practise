import React from "react";
import { SoloIconContainer } from "./IconStyle";

export interface IconProps {
  PickLog: () => void;
  children: React.ReactNode;
  color: string;
}

const Icons: React.FC<IconProps> = ({ PickLog, children, color }) => {
  return (
    <SoloIconContainer color={color} onClick={PickLog}>
      {children}
    </SoloIconContainer>
  );
};

export default Icons;
