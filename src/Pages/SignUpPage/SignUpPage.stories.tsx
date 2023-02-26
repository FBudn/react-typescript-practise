import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SignUpPage from "./SignUpPage";

export default {
  title: "Pages/SignUpPage",
  component: SignUpPage,
} as ComponentMeta<typeof SignUpPage>;

const Template: ComponentStory<typeof SignUpPage> = (args) => (
  <SignUpPage {...args} />
);

export const Basic = Template.bind({});
