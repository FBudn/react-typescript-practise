import { Meta, Story } from "@storybook/react";
import React from "react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const FlexFullWidthLOGIN = Template.bind({});
FlexFullWidthLOGIN.args = {
  children: "LOGIN",
};

export const FlexFullWidthSIGNUP = Template.bind({});
FlexFullWidthSIGNUP.args = {
  children: "SIGN UP",
};
