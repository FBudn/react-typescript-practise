import React from "react";
import { SoloIconContainer } from "./IconStyle";

export interface IconProps {
  PickLog: () => any;
  children: any;
}

const Icons: React.FC<IconProps> = ({ PickLog, children }) => {
  return (
    <SoloIconContainer
      // style={{ color: "red", borderColor: "red" }} // ZOSTAWIŁEM STYLE BO MAM JEDEN ICON-CONT - KOLOR ZMIENIAĆ EW. PRZEZ PROPSY?
      onClick={PickLog}
    >
      {children}
    </SoloIconContainer>
  );
};

export default Icons;
