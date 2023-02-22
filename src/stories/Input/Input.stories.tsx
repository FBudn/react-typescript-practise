/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
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

export const TextInputBasic = Template.bind({});
TextInputBasic.args = {
  type: "text",
};
