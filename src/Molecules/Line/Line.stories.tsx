import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Line from "./Line";

export default {
  title: "Molecules/Line",
  component: Line,
} as ComponentMeta<typeof Line>;

const Template: ComponentStory<typeof Line> = (args) => <Line {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: "OR",
};
