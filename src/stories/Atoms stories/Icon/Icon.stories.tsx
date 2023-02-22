import React from "react";
import { Meta, Story } from "@storybook/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { string } from "prop-types";
import Icon, { IconProps } from "../../../Atoms/Icon/Icon";

export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    onClickIcon: { action: "Console.log: `My name Clicked` " },
    color: string,
  },
} as Meta;

const Template: Story<IconProps> = (args) => (
  <Icon {...args}>{args.children}</Icon>
);

export const BasicIcon = Template.bind({});
BasicIcon.args = {
  children: <FontAwesomeIcon icon={faFacebookF} />,
  storybookTesting: { width: "30px" },
};
