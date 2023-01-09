import React from "react";
import { ForgotPassContainer } from "./Styles";

export interface ForgotPassProps {
  text: string;
}

const ForgotPass: React.FC<ForgotPassProps> = ({ text }) => {
  return <ForgotPassContainer>{text}</ForgotPassContainer>;
};

export default ForgotPass;
