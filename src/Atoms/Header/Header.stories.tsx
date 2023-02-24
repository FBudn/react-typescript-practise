import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import Header, { HeaderProps } from "./Header";

export default {
  title: "Atoms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;
export const FlexFullWidthLOGIN = Template.bind({});

FlexFullWidthLOGIN.args = {
  children: "LOGIN",
};

export const FlexFullWidthSIGNUP = Template.bind({});

FlexFullWidthSIGNUP.args = {
  children: "SIGN UP",
};
