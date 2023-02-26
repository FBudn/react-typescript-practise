import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import FormLogin from "./FormLogin";

export default {
  title: "Organisms/FormLogin",
  component: FormLogin,
  argTypes: { ref: { action: "I'm forwardind ref" } },
} as ComponentMeta<typeof FormLogin>;

const Template: ComponentStory<typeof FormLogin> = (args) => (
  <FormLogin {...args} />
);

export const Basic = Template.bind({});
