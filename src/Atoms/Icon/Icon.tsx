import React from "react";
import { SoloIconContainer } from "./IconStyle";

export interface IconProps {
  onClickIcon: () => void;
  children: React.ReactNode;
  color: string;
}

const Icons: React.FC<IconProps> = ({ onClickIcon, children, color }) => {
  return (
    <SoloIconContainer color={color} onClick={onClickIcon}>
      {children}
    </SoloIconContainer>
  );
};

export default Icons;

/*
Nazwa funkcji znowu
*/
