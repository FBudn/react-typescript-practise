import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import InputAndLabel from "./InputAndLabel";

export default {
  title: "Molecules/InputAndLabel",
  component: InputAndLabel,
} as ComponentMeta<typeof InputAndLabel>;

const Template: ComponentStory<typeof InputAndLabel> = (args) => (
  <InputAndLabel {...args} />
);

export const BasicEmail = Template.bind({});
BasicEmail.args = {
  children: "Email",
};
export const BasicPassword = Template.bind({});
BasicPassword.args = {
  children: "Password",
};
