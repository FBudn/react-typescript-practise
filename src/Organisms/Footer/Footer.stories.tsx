import { Meta, Story } from "@storybook/react";
import React from "react";
import Footer, { FooterProps } from "./Footer";

export default {
  title: "Organisms/Footer",
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const BasicLogin = Template.bind({});
BasicLogin.args = {
  infoText: "Need an account?",
  lineText: "OR",
  linkText: "SIGN UP",
};

export const BasicSignUp = Template.bind({});
BasicSignUp.args = {
  infoText: "Already a user?",
  lineText: "OR",
  linkText: "LOGIN",
};
