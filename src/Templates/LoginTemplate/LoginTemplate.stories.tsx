import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoginTemplate from "./LoginTemplate";

export default {
  title: "Templates/LoginTemplate",
  component: LoginTemplate,
} as ComponentMeta<typeof LoginTemplate>;

const Template: ComponentStory<typeof LoginTemplate> = (args) => (
  <LoginTemplate {...args} />
);

export const Basic = Template.bind({});
