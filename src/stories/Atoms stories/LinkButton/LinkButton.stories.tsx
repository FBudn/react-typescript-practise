import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LinkButton from "../../../Atoms/LinkButton/LinkButton";

export default {
  title: "Atoms/LinkButton",
  component: LinkButton,
  argTypes: {
    onClickLink: { action: "Im switching page" },
  },
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => (
  <LinkButton {...args} />
);

export const BasicLOGIN = Template.bind({});
BasicLOGIN.args = {
  children: "LOGIN",
};

export const BasicSIGNUP = Template.bind({});
BasicSIGNUP.args = {
  children: "SIGN UP",
};
