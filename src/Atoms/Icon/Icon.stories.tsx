import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "./Icon";

export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    onClickIcon: { action: "Console.log: `My name Clicked` " },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const BasicIcon = Template.bind({});
