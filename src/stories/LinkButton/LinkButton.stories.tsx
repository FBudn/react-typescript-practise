/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Meta, Story } from "@storybook/react";
import LinkButton, { LinkButtonProps } from "../../Atoms/LinkButton/LinkButton";

export default {
  title: "Atoms/LinkButton",
  component: LinkButton,
  argTypes: {
    onClickLink: { action: "Im switching page" },
  },
} as Meta;

const Template: Story<LinkButtonProps> = (args) => (
  <LinkButton {...args}>{args.children}</LinkButton>
);

export const Basic = Template.bind({});
Basic.args = {
  children: "Link which as a default has global text styles",
};
