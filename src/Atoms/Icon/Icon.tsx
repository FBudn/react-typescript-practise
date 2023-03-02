import React from "react";
import { SoloIconContainer } from "./IconStyle";

export interface IconProps {
  onClickIcon: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
  color: string;
  name: string;
}

const Icon: React.FC<IconProps> = ({ onClickIcon, children, color }) => {
  return (
    <SoloIconContainer color={color} onClick={onClickIcon}>
      {children}
    </SoloIconContainer>
  );
};

export default Icon;

/*
Nazwa funkcji znowu
*/
