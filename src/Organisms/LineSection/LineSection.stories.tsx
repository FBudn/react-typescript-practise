import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LineSection from "./LineSection";

export default {
  title: "Organisms/LineSection",
  component: LineSection,
} as ComponentMeta<typeof LineSection>;

const Template: ComponentStory<typeof LineSection> = (args) => (
  <LineSection {...args} />
);

export const BasicLogin = Template.bind({});
BasicLogin.args = {
  children: "Need an account?",
  lineText: "OR",
  linkText: "SIGN UP",
};

export const BasicSignUp = Template.bind({});
BasicSignUp.args = {
  children: "Already a user?",
  lineText: "OR",
  linkText: "LOGIN",
};
