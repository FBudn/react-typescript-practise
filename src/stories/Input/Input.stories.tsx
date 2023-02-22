import React from "react";
import { Meta, Story } from "@storybook/react";
import Input, { InputProps } from "../../Atoms/Input/Input";

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    ref: { action: "I'm forwarding a reference" },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const FlexFullWidth = Template.bind({});
FlexFullWidth.args = {
  type: "text",
};
