import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoginPage from "./LoginPage";

export default {
  title: "Pages/LoginPage",
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = (args) => (
  <LoginPage {...args} />
);

export const Basic = Template.bind({});
