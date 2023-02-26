import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import FormSignUp from "./FormSignUp";

export default {
  title: "Organisms/FormSignUp",
  component: FormSignUp,
  argTypes: { ref: { action: "I'm forwardind ref" } },
} as ComponentMeta<typeof FormSignUp>;

const Template: ComponentStory<typeof FormSignUp> = (args) => (
  <FormSignUp {...args} />
);

export const Basic = Template.bind({});
