import React from "react";
import { ForgotPassContainer } from "./ForgotPassStyle";

export interface ForgotPassProps {
  children: string;
}

const ForgotPass: React.FC<ForgotPassProps> = ({ children }) => {
  return <ForgotPassContainer>{children}</ForgotPassContainer>;
};

export default ForgotPass;
