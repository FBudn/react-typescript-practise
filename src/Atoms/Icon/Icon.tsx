import React from "react";
import { SoloIconContainer } from "./IconStyle";

export interface IconProps {
  onClickIcon: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
  color: string;
  storybookTesting?: any;
}

const Icon: React.FC<IconProps> = ({
  onClickIcon,
  children,
  color,
  storybookTesting,
}) => {
  return (
    <SoloIconContainer
      color={color}
      onClick={onClickIcon}
      style={storybookTesting}
    >
      {children}
    </SoloIconContainer>
  );
};

export default Icon;

/*
Nazwa funkcji znowu
*/
