import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SignUpTemplate from "./SignUpTemplate";

export default {
  title: "Templates/SignUpTemplate",
  component: SignUpTemplate,
} as ComponentMeta<typeof SignUpTemplate>;

const Template: ComponentStory<typeof SignUpTemplate> = (args) => (
  <SignUpTemplate {...args} />
);

export const Basic = Template.bind({});
