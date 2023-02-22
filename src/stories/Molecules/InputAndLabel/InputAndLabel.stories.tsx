import React from "react";
import { Meta, Story } from "@storybook/react";
import InputAndLabel, {
  InputAndLabelProps,
} from "../../../Molecules/InputAndLabel/InputAndLabel";

export default {
  title: "Molecules/InputAndLabel",
  component: InputAndLabel,
  type: "Text",
} as Meta;

const Template: Story<InputAndLabelProps> = (args) => (
  <InputAndLabel type={args.type}>{args.children}</InputAndLabel>
);

export const Basic = Template.bind({});
Basic.args = {
  children: "Email",
};
