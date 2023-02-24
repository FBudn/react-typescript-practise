import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "../../../Atoms/Input/Input";

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    ref: { action: "I'm forwarding a reference" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const FlexFullWidth = Template.bind({});
FlexFullWidth.args = {
  type: "text",
};

// roznica w componentMeta vs as Meta po prostu i tak samo w Story
// szerokość inputa co tutaj
