import React from "react";
import { Meta, Story } from "@storybook/react";
import Header, { HeaderProps } from "../../Atoms/Header/Header";

export default {
  title: "Atoms/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header>{args.children}</Header>;
export const FlexFullWidth = Template.bind({});
FlexFullWidth.args = {
  children: "LABEL: Label which as a default has global text styles",
};
