import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import Header, { HeaderProps } from "../../../Atoms/Header/Header";

export default {
  title: "Atoms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;
export const FlexFullWidth = Template.bind({});

FlexFullWidth.args = {
  children: "LABEL: Label which as a default has global text styles",
};
