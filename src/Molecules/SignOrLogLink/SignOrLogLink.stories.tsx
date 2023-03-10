import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SignOrLogLink from "./SignOrLogLink";

export default {
  title: "Molecules/SignOrLogLink",
  component: SignOrLogLink,
} as ComponentMeta<typeof SignOrLogLink>;

const Template: ComponentStory<typeof SignOrLogLink> = (args) => (
  <SignOrLogLink {...args} />
);

export const BasicLogin = Template.bind({});
BasicLogin.args = {
  children: "Need an account?",
  linkText: "LOGIN",
};

export const BasicSIGNUP = Template.bind({});
BasicSIGNUP.args = {
  children: "Already a user?",
  linkText: "SIGN UP",
};
