import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CheckboxAndLabel from "./CheckboxAndLabel";

export default {
  title: "Molecules/CheckboxAndLabel",
  component: CheckboxAndLabel,
} as ComponentMeta<typeof CheckboxAndLabel>;

const Template: ComponentStory<typeof CheckboxAndLabel> = (args) => (
  <CheckboxAndLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  infoText: "Remember me?",
};
